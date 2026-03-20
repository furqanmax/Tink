const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { AccessToken } = require('livekit-server-sdk');

admin.initializeApp();

function getLiveKitCredentials() {
  const apiKey = functions.config().livekit?.api_key || process.env.LIVEKIT_API_KEY;
  const apiSecret = functions.config().livekit?.api_secret || process.env.LIVEKIT_API_SECRET;
  const url = functions.config().livekit?.url || process.env.LIVEKIT_URL || 'ws://localhost:7880';
  const defaultRoom = process.env.LIVEKIT_ROOM || 'default-room';
  return { apiKey, apiSecret, url, defaultRoom };
}

function buildLiveKitToken({ roomName, userName, identity }) {
  const { apiKey, apiSecret, url, defaultRoom } = getLiveKitCredentials();
  if (!apiKey || !apiSecret) {
    throw new Error('LiveKit credentials not configured');
  }

  const effectiveRoomName = roomName || defaultRoom;
  if (!effectiveRoomName) {
    throw new Error('LiveKit room not configured');
  }

  const token = new AccessToken(apiKey, apiSecret);
  token.addGrant({
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
    room: effectiveRoomName,
    roomJoin: true,
    roomCreate: true,
    identity,
  });
  token.name = userName;
  return {
    token: token.toJwt(),
    url,
    roomName: effectiveRoomName,
  };
}

/**
 * Generate LiveKit access token for video calls
 */
exports.generateLiveKitToken = functions.https.onCall(async (data, context) => {
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  const { roomName, userName } = data;

  if (!userName) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'userName is required'
    );
  }

  try {
    return buildLiveKitToken({
      roomName,
      userName,
      identity: context.auth.uid,
    });
  } catch (error) {
    console.error('Token generation error:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to generate access token'
    );
  }
});

/**
 * Generate LiveKit token via HTTP endpoint (CORS-friendly fallback for local/dev)
 */
exports.generateLiveKitTokenHttp = functions.https.onRequest(async (req, res) => {
  const origin = req.headers.origin || '*';
  res.set('Access-Control-Allow-Origin', origin);
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const authHeader = req.headers.authorization || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!idToken) {
      res.status(401).json({ error: 'Missing authorization token' });
      return;
    }

    const decoded = await admin.auth().verifyIdToken(idToken);
    const { roomName, userName } = req.body || {};
    if (!userName) {
      res.status(400).json({ error: 'userName is required' });
      return;
    }

    const response = buildLiveKitToken({
      roomName,
      userName,
      identity: decoded.uid,
    });

    res.status(200).json(response);
  } catch (error) {
    console.error('HTTP token generation error:', error);
    res.status(500).json({ error: 'Failed to generate access token' });
  }
});

/**
 * Validate user and check permissions
 */
exports.validateUser = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Not authenticated');
  }

  try {
    const user = await admin.auth().getUser(context.auth.uid);
    const userDoc = await admin.firestore().doc(`users/${context.auth.uid}`).get();
    
    return {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      role: userDoc.data()?.role || 'user',
      isVerified: userDoc.data()?.isVerified || false,
    };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'User validation failed');
  }
});

/**
 * Send push notification via FCM
 */
exports.sendNotification = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Not authenticated');
  }

  const { recipientId, title, body, data: payloadData, type } = data;

  if (!recipientId || !title || !body) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
  }

  try {
    // Get recipient's FCM token
    const userDoc = await admin.firestore().doc(`users/${recipientId}`).get();
    const fcmToken = userDoc.data()?.fcmToken;

    if (!fcmToken) {
      throw new Error('Recipient has no FCM token');
    }

    // Send message
    const message = {
      token: fcmToken,
      notification: {
        title,
        body,
      },
      data: {
        type: type || 'message',
        senderId: context.auth.uid,
        ...payloadData,
      },
      android: {
        priority: 'high',
        notification: {
          channelId: type === 'call' ? 'calls' : 'messages',
          priority: 'high',
        },
      },
      apns: {
        payload: {
          aps: {
            alert: {
              title,
              body,
            },
            badge: 1,
            sound: type === 'call' ? 'ringtone.caf' : 'notification.caf',
          },
        },
      },
    };

    const response = await admin.messaging().send(message);
    return { success: true, messageId: response };
  } catch (error) {
    console.error('Notification error:', error);
    throw new functions.https.HttpsError('internal', 'Failed to send notification');
  }
});

/**
 * Send push notification when a new message is created
 */
exports.notifyOnMessageCreate = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap) => {
    const message = snap.data();
    const recipientId = message?.recipientId;
    const senderId = message?.senderId;

    if (!recipientId || !senderId) {
      return null;
    }

    try {
      const userDoc = await admin.firestore().doc(`users/${recipientId}`).get();
      const fcmToken = userDoc.data()?.fcmToken;
      if (!fcmToken) {
        return null;
      }

      const title = message?.senderName
        ? `Message from ${message.senderName}`
        : 'New message';

      const payload = {
        token: fcmToken,
        notification: {
          title,
          body: 'New message',
        },
        data: {
          type: 'message',
          senderId,
          recipientId,
          conversationId: message?.conversationId || '',
        },
        webpush: {
          headers: {
            Urgency: 'high',
          },
          fcmOptions: {
            link: '/chat',
          },
          notification: {
            title,
            body: 'New message',
            icon: '/icon.svg',
            badge: '/icon.svg',
            tag: 'message',
          },
        },
      };

      return admin.messaging().send(payload);
    } catch (error) {
      console.error('Failed to send message notification:', error);
      return null;
    }
  });

/**
 * Create admin user (one-time setup function)
 */
exports.createAdminUser = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Not authenticated');
  }

  // Check if caller is already admin
  const callerDoc = await admin.firestore().doc(`users/${context.auth.uid}`).get();
  if (callerDoc.data()?.role !== 'admin') {
    // Check if any admin exists
    const adminsQuery = await admin.firestore()
      .collection('users')
      .where('role', '==', 'admin')
      .limit(1)
      .get();
    
    if (!adminsQuery.empty) {
      throw new functions.https.HttpsError('permission-denied', 'Admin already exists');
    }
  }

  const { email, password, displayName } = data;

  try {
    // Create Firebase user
    const user = await admin.auth().createUser({
      email,
      password,
      displayName: displayName || 'Admin',
    });

    // Set custom claims
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });

    // Create Firestore document
    await admin.firestore().doc(`users/${user.uid}`).set({
      uid: user.uid,
      email,
      displayName: displayName || 'Admin',
      role: 'admin',
      isVerified: true,
      status: 'offline',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      friends: [],
      blockedUsers: [],
      settings: {
        privacyLevel: 'public',
        notificationsEnabled: true,
      },
    });

    return { uid: user.uid, email };
  } catch (error) {
    console.error('Admin creation error:', error);
    throw new functions.https.HttpsError('internal', 'Failed to create admin user');
  }
});

/**
 * Trigger: Send notification on new friend request
 */
exports.onFriendRequestCreated = functions.firestore
  .document('friendRequests/{requestId}')
  .onCreate(async (snap, context) => {
    const requestData = snap.data();
    
    if (requestData.status !== 'pending') return;

    try {
      // Get recipient's FCM token
      const userDoc = await admin.firestore().doc(`users/${requestData.recipientId}`).get();
      const fcmToken = userDoc.data()?.fcmToken;

      if (!fcmToken) return;

      const message = {
        token: fcmToken,
        notification: {
          title: 'New Friend Request',
          body: `${requestData.senderName} wants to connect with you`,
        },
        data: {
          type: 'friend_request',
          requestId: context.params.requestId,
          senderId: requestData.senderId,
          senderName: requestData.senderName,
        },
        android: {
          priority: 'high',
        },
        apns: {
          payload: {
            aps: {
              alert: {
                title: 'New Friend Request',
                body: `${requestData.senderName} wants to connect with you`,
              },
              badge: 1,
            },
          },
        },
      };

      await admin.messaging().send(message);
    } catch (error) {
      console.error('Friend request notification error:', error);
    }
  });

/**
 * Trigger: Send notification on new message
 */
exports.onMessageCreated = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    const messageData = snap.data();
    
    try {
      // Get recipient's FCM token
      const userDoc = await admin.firestore().doc(`users/${messageData.recipientId}`).get();
      const fcmToken = userDoc.data()?.fcmToken;

      if (!fcmToken) return;

      // Check if recipient is online
      const recipientStatus = userDoc.data()?.status;
      if (recipientStatus === 'online') return; // Don't notify if online

      const message = {
        token: fcmToken,
        notification: {
          title: `Message from ${messageData.senderName}`,
          body: messageData.content.substring(0, 100) + (messageData.content.length > 100 ? '...' : ''),
        },
        data: {
          type: 'message',
          messageId: context.params.messageId,
          conversationId: messageData.conversationId,
          senderId: messageData.senderId,
          senderName: messageData.senderName,
        },
        android: {
          priority: 'normal',
        },
        apns: {
          payload: {
            aps: {
              alert: {
                title: `Message from ${messageData.senderName}`,
                body: messageData.content.substring(0, 100),
              },
              badge: 1,
            },
          },
        },
      };

      await admin.messaging().send(message);
    } catch (error) {
      console.error('Message notification error:', error);
    }
  });
