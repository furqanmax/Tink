import { useEffect, useState } from 'react';
import { useFriendRequestStore } from '@/store/friendRequestStore';
import { useAuthStore } from '@/store/authStore';
import { UserPlus, Check, X, Clock, UserCheck } from 'lucide-react';

interface FriendRequestsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FriendRequestsPanel({ isOpen, onClose }: FriendRequestsPanelProps) {
  const { user } = useAuthStore();
  const {
    incomingRequests,
    outgoingRequests,
    loading,
    acceptFriendRequest,
    rejectFriendRequest,
    cancelFriendRequest,
    loadFriendRequests,
  } = useFriendRequestStore();

  const [activeTab, setActiveTab] = useState<'incoming' | 'outgoing'>('incoming');
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && user) {
      loadFriendRequests();
    }
  }, [isOpen, user, loadFriendRequests]);

  const handleAccept = async (requestId: string) => {
    setProcessingId(requestId);
    try {
      await acceptFriendRequest(requestId);
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (requestId: string) => {
    setProcessingId(requestId);
    try {
      await rejectFriendRequest(requestId);
    } finally {
      setProcessingId(null);
    }
  };

  const handleCancel = async (requestId: string) => {
    setProcessingId(requestId);
    try {
      await cancelFriendRequest(requestId);
    } finally {
      setProcessingId(null);
    }
  };

  if (!isOpen) return null;

  const requests = activeTab === 'incoming' ? incomingRequests : outgoingRequests;
  const hasRequests = requests.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Friend Requests</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('incoming')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'incoming'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            Incoming
            {incomingRequests.length > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                {incomingRequests.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('outgoing')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'outgoing'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Clock className="w-4 h-4" />
            Sent
            {outgoingRequests.length > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                {outgoingRequests.length}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading && requests.length === 0 ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : !hasRequests ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeTab === 'incoming' ? (
                  <UserPlus className="w-8 h-8 text-gray-400" />
                ) : (
                  <Clock className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <p className="text-gray-500">
                {activeTab === 'incoming'
                  ? 'No incoming friend requests'
                  : 'No pending sent requests'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">
                      {(activeTab === 'incoming' ? request.senderName : request.recipientName)?.[0]?.toUpperCase() || '?'}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {activeTab === 'incoming' ? request.senderName : request.recipientName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activeTab === 'incoming' ? 'Wants to be your friend' : 'Request pending'}
                    </p>
                  </div>

                  {activeTab === 'incoming' ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAccept(request.id)}
                        disabled={processingId === request.id}
                        className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors disabled:opacity-50"
                      >
                        {processingId === request.id ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Check className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        disabled={processingId === request.id}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCancel(request.id)}
                      disabled={processingId === request.id}
                      className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
