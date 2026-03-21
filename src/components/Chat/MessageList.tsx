import { useState, useRef, useEffect } from 'react';
import { Message } from '@/types';
import { formatTimestamp } from '@/utils/formatters';
import { FileText, Video as VideoIcon, Music, Reply, Pencil, Trash2 } from 'lucide-react';

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
  selectionMode?: boolean;
  selectedIds?: Set<string>;
  onToggleSelection?: (id: string) => void;
  onReply?: (message: Message) => void;
  onEdit?: (message: Message) => void;
  onDelete?: (messageId: string) => void;
}

export function MessageList({ 
  messages, 
  currentUserId, 
  selectionMode = false,
  selectedIds = new Set(),
  onToggleSelection,
  onReply,
  onEdit,
  onDelete
}: MessageListProps) {
  const [swipeId, setSwipeId] = useState<string | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [longPressId, setLongPressId] = useState<string | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = (e: React.TouchEvent, messageId: string) => {
    if (selectionMode) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    
    longPressTimer.current = setTimeout(() => {
      setLongPressId(messageId);
    }, 500);
  };

  const handleTouchMove = (e: React.TouchEvent, messageId: string) => {
    if (!touchStart.current || selectionMode) return;
    
    const deltaX = e.touches[0].clientX - touchStart.current.x;
    const deltaY = Math.abs(e.touches[0].clientY - touchStart.current.y);

    if (deltaY > 30) {
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
      return;
    }

    if (Math.abs(deltaX) > 10) {
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
      setSwipeId(messageId);
      // Limit swipe to 60px
      const offset = Math.max(Math.min(deltaX, 60), -60);
      setSwipeOffset(offset);
    }
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    
    if (Math.abs(swipeOffset) > 40) {
      const message = messages.find(m => m.messageId === swipeId);
      if (message) {
        if (swipeOffset > 0) {
          onReply?.(message);
        } else if (message.senderId === currentUserId && message.type === 'text') {
          onEdit?.(message);
        }
      }
    }
    
    setSwipeId(null);
    setSwipeOffset(0);
    touchStart.current = null;
  };

  useEffect(() => {
    const handleClickOutside = () => setLongPressId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (messages.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <p className="text-gray-500 dark:text-gray-400">No messages yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Start the conversation!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-4 py-4 space-y-4 overflow-x-hidden">
      {messages.map((message, index) => {
        const isOwn = message.senderId === currentUserId;
        const showAvatar = !isOwn && (
          index === 0 || messages[index - 1].senderId !== message.senderId
        );
        const isSwiping = swipeId === message.messageId;
        const isLongPressed = longPressId === message.messageId;

        return (
          <div
            key={message.messageId}
            id={`message-${message.messageId}`}
            className={`flex w-full transition-colors duration-500 relative ${isOwn ? 'justify-end' : 'justify-start'} ${
              selectionMode ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50' : ''
            }`}
            onClick={() => selectionMode && onToggleSelection?.(message.messageId)}
            onTouchStart={(e) => handleTouchStart(e, message.messageId)}
            onTouchMove={(e) => handleTouchMove(e, message.messageId)}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gesture Indicators */}
            {isSwiping && swipeOffset > 20 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-blue-500 animate-pulse">
                <Reply className="w-5 h-5" />
              </div>
            )}
            {isSwiping && swipeOffset < -20 && isOwn && message.type === 'text' && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-green-500 animate-pulse">
                <Pencil className="w-5 h-5" />
              </div>
            )}

            <div 
              className={`flex max-w-[85%] sm:max-w-[70%] ${isOwn ? 'flex-row-reverse' : 'flex-row'} gap-2 items-center transition-transform duration-150`}
              style={{ transform: isSwiping ? `translateX(${swipeOffset}px)` : 'none' }}
            >
              {selectionMode && (
                <div className="flex-shrink-0 px-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedIds.has(message.messageId)
                      ? 'bg-blue-600 border-blue-600'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedIds.has(message.messageId) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              )}
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
                className={`group relative px-4 py-2.5 rounded-2xl ${
                  isOwn
                    ? 'bg-blue-600 dark:bg-blue-900 text-white rounded-br-md'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md shadow-sm'
                }`}
              >
                {/* Desktop Reply/Edit Buttons (hidden on mobile) */}
                {!selectionMode && (
                  <div className={`hidden lg:flex absolute top-0 ${isOwn ? '-left-20' : '-right-20'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onReply?.(message);
                      }}
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                      title="Reply"
                    >
                      <Reply className="w-4 h-4" />
                    </button>
                    {isOwn && message.type === 'text' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit?.(message);
                        }}
                        className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Mobile Long Press Menu */}
                {isLongPressed && !selectionMode && (
                  <div className="absolute z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl flex overflow-hidden animate-in fade-in zoom-in duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onReply?.(message);
                        setLongPressId(null);
                      }}
                      className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-r border-gray-100 dark:border-gray-800 flex flex-col items-center gap-1"
                    >
                      <Reply className="w-4 h-4" />
                      <span className="text-[10px]">Reply</span>
                    </button>
                    {isOwn && message.type === 'text' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit?.(message);
                          setLongPressId(null);
                        }}
                        className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-r border-gray-100 dark:border-gray-800 flex flex-col items-center gap-1"
                      >
                        <Pencil className="w-4 h-4" />
                        <span className="text-[10px]">Edit</span>
                      </button>
                    )}
                    {isOwn && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm('Delete this message?')) {
                            onDelete?.(message.messageId);
                          }
                          setLongPressId(null);
                        }}
                        className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex flex-col items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="text-[10px]">Delete</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Reply Context */}
                {message.replyTo && (
                  <div 
                    className={`mb-2 p-2 rounded-lg text-xs border-l-4 ${
                      isOwn 
                        ? 'bg-blue-700/50 dark:bg-blue-800/50 border-blue-300 text-blue-100' 
                        : 'bg-gray-100 dark:bg-gray-700 border-blue-500 text-gray-600 dark:text-gray-300'
                    } cursor-pointer hover:opacity-80`}
                    onClick={(e) => {
                      e.stopPropagation();
                      const element = document.getElementById(`message-${message.replyTo?.messageId}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      element?.classList.add('bg-blue-100', 'dark:bg-blue-900/30');
                      setTimeout(() => {
                        element?.classList.remove('bg-blue-100', 'dark:bg-blue-900/30');
                      }, 2000);
                    }}
                  >
                    <p className="font-bold truncate">
                      {message.replyTo.senderId === currentUserId ? 'You' : message.replyTo.senderName}
                    </p>
                    <p className="truncate line-clamp-1">
                      {message.replyTo.type === 'file' ? `File: ${message.replyTo.content}` : message.replyTo.content}
                    </p>
                  </div>
                )}

                {/* Forwarded Tag */}
                {message.forwardedFrom && (
                  <div className="flex items-center gap-1 mb-1 opacity-70 italic text-[10px]">
                    <Reply className="w-3 h-3 rotate-180" />
                    <span>Forwarded from {message.forwardedFrom}</span>
                  </div>
                )}

                {message.type === 'file' && message.fileData ? (
                  message.fileData.downloadUrl && message.fileData.mimeType?.startsWith('image/') ? (
                    <div className="w-full">
                      <img
                        src={message.fileData.downloadUrl}
                        alt={message.fileData.name}
                        className="w-full max-h-80 rounded-xl object-cover"
                        loading="lazy"
                      />
                      <div className={`mt-2 flex items-center justify-between text-xs ${isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                        <span className="truncate">{message.fileData.name}</span>
                        <span className="ml-2 whitespace-nowrap">
                          {(message.fileData.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {message.fileData.downloadUrl && message.fileData.mimeType?.startsWith('video/') && (
                        <video
                          src={message.fileData.downloadUrl}
                          controls
                          className="max-h-56 w-full rounded-lg bg-black"
                        />
                      )}
                      {message.fileData.downloadUrl && message.fileData.mimeType?.startsWith('audio/') && (
                        <audio controls className="w-full">
                          <source src={message.fileData.downloadUrl} />
                        </audio>
                      )}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isOwn ? 'bg-blue-500/40' : 'bg-gray-100 dark:bg-gray-900'
                        }`}>
                          {message.fileData.mimeType?.startsWith('video/') ? (
                            <VideoIcon className={`w-5 h-5 ${isOwn ? 'text-white' : 'text-purple-500'}`} />
                          ) : message.fileData.mimeType?.startsWith('audio/') ? (
                            <Music className={`w-5 h-5 ${isOwn ? 'text-white' : 'text-green-500'}`} />
                          ) : (
                            <FileText className={`w-5 h-5 ${isOwn ? 'text-white' : 'text-orange-500'}`} />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-medium truncate ${isOwn ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                            {message.fileData.name}
                          </p>
                          <p className={`text-xs ${isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                            {(message.fileData.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          {message.fileData.downloadUrl ? (
                            <a
                              href={message.fileData.downloadUrl}
                              download={message.fileData.name}
                              className={`text-xs underline ${isOwn ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}
                            >
                              Download
                            </a>
                          ) : (
                            <span className={`text-xs ${isOwn ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'}`}>
                              Waiting for file...
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <p className="text-sm break-words whitespace-pre-wrap">
                    {message.content || (message.contentEncrypted ? '[Encrypted message]' : '')}
                  </p>
                )}
                
                <div className={`flex items-center gap-1 mt-1 ${
                  isOwn ? 'justify-end' : 'justify-start'
                }`}>
                  <span className={`text-xs ${isOwn ? 'text-blue-100' : 'text-gray-400'}`}>
                    {formatTimestamp(message.timestamp)}
                  </span>
                  
                  {message.isEdited && (
                    <span className={`text-[10px] italic ${isOwn ? 'text-blue-200' : 'text-gray-400'}`}>
                      (edited)
                    </span>
                  )}
                  
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
