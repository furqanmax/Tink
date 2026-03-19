# PWA Video Chat Application

A secure, real-time video chat Progressive Web App built with React, TypeScript, Firebase, and LiveKit.

## Features

- **User Authentication** - Secure signup/login with Firebase Authentication
- **Real-time Messaging** - End-to-end encrypted text messaging with Firestore sync
- **Video/Audio Calls** - 1-on-1 video and audio calls using LiveKit WebRTC
- **File Sharing** - P2P file transfer via WebRTC DataChannel (up to 30MB)
- **Push Notifications** - Firebase Cloud Messaging for call and message notifications
- **Offline Support** - IndexedDB for message persistence when offline
- **PWA Features** - Installable app, offline caching, background sync
- **Admin Dashboard** - User management and system settings (coming soon)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Backend**: Firebase (Auth, Firestore, Cloud Functions, FCM)
- **Real-time Communication**: LiveKit (WebRTC)
- **Encryption**: TweetNaCl.js (E2E encryption)
- **Local Storage**: IndexedDB (via idb library)
- **Testing**: Vitest + Playwright

## Quick Start

### Prerequisites

- Node.js 16+ and npm
- Firebase account (free tier)
- (Optional) LiveKit server for video calls

### 1. Clone and Install

```bash
cd video-chat-app
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Enable Cloud Messaging
6. Copy your Firebase config

### 3. Environment Variables

Copy `.env.example` to `.env.local` and fill in your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FCM_VAPID_KEY=your-vapid-key
VITE_LIVEKIT_URL=wss://your-livekit-server.com
```

### 4. Firestore Security Rules

Deploy the Firestore security rules:

```bash
firebase deploy --only firestore:rules
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Run ESLint

## Project Structure

```
video-chat-app/
├── public/              # Static assets, PWA manifest, Service Worker
├── src/
│   ├── components/      # React components
│   │   ├── Auth/        # Authentication components
│   │   ├── Chat/        # Chat components
│   │   ├── Contacts/    # Contact management
│   │   └── Common/      # Shared components
│   ├── config/          # Firebase configuration
│   ├── pages/           # Page components
│   ├── services/        # Business logic (LiveKit, Encryption, etc.)
│   ├── store/           # Zustand stores
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── functions/           # Firebase Cloud Functions
├── firestore.rules      # Firestore security rules
├── firebase.json        # Firebase configuration
└── vite.config.ts       # Vite configuration
```

## Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy --only hosting
```

### LiveKit Server (Optional)

For production video calls, deploy your own LiveKit server:

```bash
# Using Docker
docker run -p 7880:7880 -p 7881:7881 \
  -e LIVEKIT_API_KEY=your-key \
  -e LIVEKIT_API_SECRET=your-secret \
  livekit/livekit-server
```

Or deploy to Cloud Run/Heroku following the documentation.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PWA (React + Vite)                       │
└────────┬────────────────────────────────────────────────────┘
         │
    ┌────┴────┬──────────────┬────────────────┐
    │         │              │                │
┌───▼──┐  ┌───▼────┐  ┌─────▼──┐  ┌─────────▼─┐
│Fire- │  │Firestore     │FCM        │Cloud      │
│base  │  │(profiles,     │(push      │Functions  │
│Auth  │  │messages)       │notify)    │(tokens)   │
└──────┘  └────────┘  └────────┘  └───────────┘
         │              │
         └──────────────┘
                │
    ┌───────────▼────────────┐
    │   LiveKit Server       │
    │   (WebRTC SFU)         │
    └───────────┬────────────┘
                │
    ┌───────────▼────────────┐
    │   STUN/TURN Servers    │
    └────────────────────────┘
```

## Security

- **Authentication**: Firebase Auth with secure token-based auth
- **Messages**: End-to-end encryption using TweetNaCl.js
- **Firestore**: Security rules restrict data access to participants
- **HTTPS**: Required for all communications
- **CSP**: Content Security Policy headers configured

## Cost

This project is designed to run on **free tiers**:

| Service | Free Tier | Usage @ 30 Users | Cost |
|---------|-----------|------------------|------|
| Firebase Auth | ∞ users | Unlimited | **$0** |
| Firestore | 50K reads/day | ~1-2K/day | **$0** |
| Cloud Functions | 2M calls/month | ~50K calls | **$0** |
| Cloud Messaging | ∞ | Unlimited | **$0** |
| Firebase Hosting | 10GB/month | ~1GB | **$0** |
| LiveKit (self-hosted) | $0 | Docker | **$0** |
| **TOTAL** | | | **$0/month** |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@videochat.app or open an issue on GitHub.

## Acknowledgments

- [LiveKit](https://livekit.io/) for WebRTC infrastructure
- [Firebase](https://firebase.google.com/) for backend services
- [TweetNaCl.js](https://tweetnacl.js.org/) for encryption
