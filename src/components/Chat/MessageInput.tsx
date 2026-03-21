import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic, X, Reply, Pencil } from 'lucide-react';
import { Message } from '@/types';

interface MessageInputProps {
  onSendMessage: (content: string, replyTo?: Message) => void;
  onEditMessage: (messageId: string, newContent: string) => void;
  replyingTo: Message | null;
  editingMessage: Message | null;
  onCancelReply: () => void;
  onCancelEdit: () => void;
}

export function MessageInput({ 
  onSendMessage, 
  onEditMessage,
  replyingTo, 
  editingMessage,
  onCancelReply,
  onCancelEdit
}: MessageInputProps) {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if ((replyingTo || editingMessage) && textareaRef.current) {
      textareaRef.current.focus();
    }
    
    if (editingMessage) {
      setMessage(editingMessage.content);
      setIsTyping(true);
    } else {
      setMessage('');
      setIsTyping(false);
    }
  }, [replyingTo, editingMessage]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (message.trim()) {
      if (editingMessage) {
        onEditMessage(editingMessage.messageId, message.trim());
        onCancelEdit();
      } else {
        onSendMessage(message.trim(), replyingTo || undefined);
        onCancelReply();
      }
      setMessage('');
      setIsTyping(false);
      
      // Keep focus on textarea to prevent keyboard from closing on mobile
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const handleKeyDown = (_e: React.KeyboardEvent) => {
    // We let the textarea handle Enter by default for new lines
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 sm:p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]"
    >
      {/* Reply Preview */}
      {replyingTo && (
        <div className="mb-2 flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-blue-500">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Reply className="w-3 h-3" />
              <span className="text-xs font-bold">
                Replying to {replyingTo.senderName}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate line-clamp-1">
              {replyingTo.type === 'file' ? `File: ${replyingTo.content}` : replyingTo.content}
            </p>
          </div>
          <button
            type="button"
            onClick={onCancelReply}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}

      {/* Edit Preview */}
      {editingMessage && (
        <div className="mb-2 flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-green-500">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Pencil className="w-3 h-3" />
              <span className="text-xs font-bold">
                Editing message
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate line-clamp-1">
              {editingMessage.content}
            </p>
          </div>
          <button
            type="button"
            onClick={onCancelEdit}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}

      <div className="flex items-end gap-2 w-full min-w-0">
        <button
          type="button"
          className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        <div className="flex-1 relative min-w-0">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={1}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32 text-[16px] sm:text-base overflow-x-hidden"
            style={{ minHeight: '40px' }}
          />
        </div>

        {isTyping ? (
          <button
            type="submit"
            className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <button
            type="button"
            className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Mic className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}
