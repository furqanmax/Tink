import { Message } from '@/types';
import { formatTimestamp } from '@/utils/formatters';

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <p className="text-gray-500">No messages yet</p>
          <p className="text-sm text-gray-400 mt-1">Start the conversation!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {messages.map((message, index) => {
        const isOwn = message.senderId === currentUserId;
        const showAvatar = !isOwn && (
          index === 0 || messages[index - 1].senderId !== message.senderId
        );

        return (
          <div
            key={message.messageId}
            className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[70%] ${isOwn ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
              {/* Avatar (only show for first message in sequence from other user) */}
              {!isOwn && (
                <div className={`w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ${
                  showAvatar ? 'visible' : 'invisible'
                }`}>
                  <span className="text-blue-600 text-xs font-medium">
                    {message.senderName?.[0]?.toUpperCase() || '?'}
                  </span>
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`px-4 py-2.5 rounded-2xl ${
                  isOwn
                    ? 'bg-blue-600 text-white rounded-br-md'
                    : 'bg-white text-gray-900 rounded-bl-md shadow-sm'
                }`}
              >
                <p className="text-sm">
                  {message.content || (message.contentEncrypted ? '[Encrypted message]' : '')}
                </p>
                
                <div className={`flex items-center gap-1 mt-1 ${
                  isOwn ? 'justify-end' : 'justify-start'
                }`}>
                  <span className={`text-xs ${isOwn ? 'text-blue-100' : 'text-gray-400'}`}>
                    {formatTimestamp(message.timestamp)}
                  </span>
                  
                  {isOwn && (
                    <span className="text-blue-100">
                      {message.isRead ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
