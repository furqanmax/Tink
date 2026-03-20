const functions = require('firebase-functions');
const admin = require('firebase-admin');
const webpush = require('web-push');
const { AccessToken } = require('livekit-server-sdk');

admin.initializeApp();
let webPushInitialized = false;

function coerceDataToStrings(data = {}) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (value === undefined || value === null) return acc;
    acc[key] = typeof value === 'string' ? value : String(value);
    return acc;
  }, {});
}

function getWebPushConfig() {
  const publicKey = functions.config().webpush?.public_key || process.env.WEB_PUSH_PUBLIC_KEY;
  const privateKey = functions.config().webpush?.private_key || process.env.WEB_PUSH_PRIVATE_KEY;
  const subject = functions.config().webpush?.subject || process.env.WEB_PUSH_SUBJECT || 'mailto:no-reply@example.com';
  return { publicKey, privateKey, subject };
}

function ensureWebPushConfigured() {
  if (webPushInitialized) return true;
  const { publicKey, privateKey, subject } = getWebPushConfig();
  if (!publicKey || !privateKey) return false;
  webpush.setVapidDetails(subject, publicKey, privateKey);
  webPushInitialized = true;
  return true;
}

function getWebPushSubscriptions(userData = {}) {
  const raw = userData.webPushSubscriptions;
  const entries = Array.isArray(raw) ? raw : raw && typeof raw === 'object' ? Object.values(raw) : [];
  return entries.filter((subscription) =>
    subscription &&
    typeof subscription === 'object' &&
    typeof subscription.endpoint === 'string' &&
    subscription.endpoint.length > 0 &&
    subscription.keys &&
    typeof subscription.keys.auth === 'string' &&
    typeof subscription.keys.p256dh === 'string'
  );
}

async function getRecipientNotificationTargets(recipientId) {
  if (!recipientId) return null;
  const userDoc = await admin.firestore().doc(`users/${recipientId}`).get();
  const data = userDoc.data() || {};
  return {
    userRef: userDoc.ref,
    fcmToken: data.fcmToken || null,
    webPushSubscriptions: getWebPushSubscriptions(data),
  };
}

function isStaleWebPushError(error) {
  return error?.statusCode === 404 || error?.statusCode === 410;
}

async function sendWebPushToSubscriptions(subscriptions, payload) {
  if (!Array.isArray(subscriptions) || subscriptions.length === 0) {
    return { sent: 0, staleSubscriptionIds: [] };
  }
  if (!ensureWebPushConfigured()) {
    return { sent: 0, staleSubscriptionIds: [] };
  }

  const body = JSON.stringify(payload);
  const settled = await Promise.allSettled(
    subscriptions.map(async (subscription) => {
      await webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: subscription.keys,
        },
        body,
        {
          urgency: payload.data?.type === 'call' ? 'high' : 'normal',
          TTL: payload.data?.type === 'call' ? 60 : 3600,
        }
      );
      return subscription.subscriptionId;
    })
  );

  const staleSubscriptionIds = [];
  let sent = 0;
  settled.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      sent += 1;
      return;
    }
    const subscription = subscriptions[index];
    if (isStaleWebPushError(result.reason) && subscription?.subscriptionId) {
      staleSubscriptionIds.push(subscription.subscriptionId);
      return;
    }
    console.warn('Web push send failed:', result.reason?.message || result.reason);
  });

  return { sent, staleSubscriptionIds };
}

async function sendPushToUser({
  recipientId,
  title,
  body,
  data = {},
  type = 'system',
  requireInteraction = false,
  link = '/chat',
}) {
  if (!recipientId || !title || !body) return null;
  const targets = await getRecipientNotificationTargets(recipientId);
  if (!targets) return null;
  const { fcmToken, webPushSubscriptions, userRef } = targets;
  if (!fcmToken && webPushSubscriptions.length === 0) return null;

  const payloadData = coerceDataToStrings({
    ...data,
    type,
  });

  const message = {
    token: fcmToken,
    notification: {
      title,
      body,
    },
    data: payloadData,
    android: {
      priority: type === 'call' ? 'high' : 'normal',
      notification: {
        channelId: type === 'call' ? 'calls' : 'messages',
        tag: payloadData.tag || type,
      },
    },
    webpush: {
      headers: {
        Urgency: type === 'call' ? 'high' : 'normal',
      },
      fcmOptions: {
        link,
      },
      notification: {
        title,
        body,
        icon: '/icon.svg',
        badge: '/icon.svg',
        tag: payloadData.tag || type,
        requireInteraction,
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
          sound: type === 'call' ? 'default' : 'default',
        },
      },
    },
  };

  const pushPayload = {
    notification: {
      title,
      body,
    },
    data: payloadData,
  };

  const [fcmResult, webPushResult] = await Promise.allSettled([
    fcmToken ? admin.messaging().send(message) : Promise.resolve(null),
    sendWebPushToSubscriptions(webPushSubscriptions, pushPayload),
  ]);

  if (webPushResult.status === 'fulfilled' && webPushResult.value.staleSubscriptionIds.length > 0) {
    const staleFieldDeletes = {};
    webPushResult.value.staleSubscriptionIds.forEach((subscriptionId) => {
      staleFieldDeletes[`webPushSubscriptions.${subscriptionId}`] = admin.firestore.FieldValue.delete();
    });
    await userRef.update(staleFieldDeletes);
  }

  const fcmMessageId = fcmResult.status === 'fulfilled' ? fcmResult.value : null;
  const webPushSent = webPushResult.status === 'fulfilled' ? webPushResult.value.sent : 0;
  if (!fcmMessageId && webPushSent === 0) {
    const error =
      fcmResult.status === 'rejected'
        ? fcmResult.reason
        : webPushResult.status === 'rejected'
        ? webPushResult.reason
        : new Error('No push targets available');
    throw error;
  }

  return {
    fcmMessageId,
    webPushSent,
  };
}

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
    const response = await sendPushToUser({
      recipientId,
      title,
      body,
      type: type || 'message',
      data: {
        senderId: context.auth.uid,
        ...payloadData,
      },
      requireInteraction: type === 'call',
      link: '/chat',
    });
    if (!response) {
      throw new Error('Recipient has no FCM token');
    }
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
  .onCreate(async (snap, context) => {
    const message = snap.data() || {};
    const recipientId = message.recipientId;
    const senderId = message.senderId;

    if (!recipientId || !senderId || recipientId === senderId) {
      return null;
    }

    try {
      const senderName = message.senderName || 'Someone';
      const content = typeof message.content === 'string' ? message.content.trim() : '';
      const preview = content
        ? `${content.slice(0, 100)}${content.length > 100 ? '...' : ''}`
        : 'New message';

      return sendPushToUser({
        recipientId,
        title: `Message from ${senderName}`,
        body: preview,
        type: 'message',
        data: {
          messageId: context.params.messageId,
          senderId,
          senderName,
          recipientId,
          conversationId: message.conversationId || '',
          tag: `message_${context.params.messageId}`,
        },
        link: '/chat',
      });
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
    const requestData = snap.data() || {};
    
    if (requestData.status !== 'pending') return;

    try {
      const senderName = requestData.senderName || 'Someone';
      return sendPushToUser({
        recipientId: requestData.recipientId,
        title: 'New Friend Request',
        body: `${senderName} wants to connect with you`,
        type: 'friend_request',
        data: {
          requestId: context.params.requestId,
          senderId: requestData.senderId,
          senderName,
          recipientId: requestData.recipientId,
          tag: `friend_request_${context.params.requestId}`,
        },
        link: '/chat',
      });
    } catch (error) {
      console.error('Friend request notification error:', error);
      return null;
    }
  });

/**
 * Trigger: Send call invite notification when new ringing session is created
 */
exports.onCallSessionCreated = functions.firestore
  .document('callSessions/{callId}')
  .onCreate(async (snap, context) => {
    const callData = snap.data() || {};
    if (callData.status !== 'ringing') return null;
    if (!callData.calleeId || !callData.callerId) return null;
    if (callData.calleeId === callData.callerId) return null;

    try {
      const callerName = callData.callerName || 'Someone';
      const isVideo = callData.isVideo !== false;
      return sendPushToUser({
        recipientId: callData.calleeId,
        title: isVideo ? 'Incoming Video Call' : 'Incoming Audio Call',
        body: `${callerName} is calling you`,
        type: 'call',
        data: {
          callId: context.params.callId,
          callerId: callData.callerId,
          callerName,
          calleeId: callData.calleeId,
          roomName: callData.roomName || '',
          isVideo: isVideo ? '1' : '0',
          tag: `call_${context.params.callId}`,
        },
        requireInteraction: true,
        link: '/chat',
      });
    } catch (error) {
      console.error('Call notification error:', error);
      return null;
    }
  });
