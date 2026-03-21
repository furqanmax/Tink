import { X, User } from 'lucide-react';

interface ParticipantSelectionModalProps {
  participants: string[];
  onSelect: (selectedName: string) => void;
  onCancel: () => void;
}

export function ParticipantSelectionModal({ participants, onSelect, onCancel }: ParticipantSelectionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Who are you in this chat?
          </h3>
          <button
            onClick={onCancel}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            We found {participants.length} participants in the WhatsApp export. Please select which name belongs to <strong>you</strong> so we can map the messages correctly.
          </p>
          
          <div className="space-y-3">
            {participants.map((name) => (
              <button
                key={name}
                onClick={() => onSelect(name)}
                className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group text-left"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors">
                  <User className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {name}
                  </div>
                  <div className="text-xs text-gray-500">
                    Select as current user
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-center">
          <button
            onClick={onCancel}
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
          >
            Cancel Import
          </button>
        </div>
      </div>
    </div>
  );
}
