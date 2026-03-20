import { useState, useRef, useCallback } from 'react';
import { Upload, X, File as FileIcon, Image, Video, Music, FileText } from 'lucide-react';

interface FilePickerProps {
  onFileSelect: (file: File) => void;
  onCancel: () => void;
  maxFileSize?: number; // in bytes, default 30MB
}

export function FilePicker({ onFileSelect, onCancel, maxFileSize = 30 * 1024 * 1024 }: FilePickerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    setError(null);
    
    if (file.size > maxFileSize) {
      setError(`File too large. Max size is ${(maxFileSize / 1024 / 1024).toFixed(0)}MB`);
      return false;
    }
    
    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleConfirm = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-8 h-8 text-blue-500" />;
    if (file.type.startsWith('video/')) return <Video className="w-8 h-8 text-purple-500" />;
    if (file.type.startsWith('audio/')) return <Music className="w-8 h-8 text-green-500" />;
    if (file.type.includes('pdf') || file.type.includes('document')) return <FileText className="w-8 h-8 text-orange-500" />;
    return <FileIcon className="w-8 h-8 text-gray-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Send File</h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {!selectedFile ? (
          /* Drag & Drop Area */
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <Upload className={`w-12 h-12 mx-auto mb-4 transition-colors ${
              isDragging ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">
              Drop file here or click to browse
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Max file size: {(maxFileSize / 1024 / 1024).toFixed(0)}MB
            </p>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleInputChange}
              className="hidden"
            />
          </div>
        ) : (
          /* Selected File Preview */
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              {getFileIcon(selectedFile)}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{selectedFile.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{formatFileSize(selectedFile.size)}</p>
              </div>
              <button
                onClick={() => setSelectedFile(null)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onCancel}
                className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Send File
              </button>
            </div>
          </div>
        )}

        {/* Supported File Types */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Supported files:</p>
          <div className="flex flex-wrap gap-2">
            {['Images', 'Videos', 'Audio', 'Documents', 'PDFs'].map((type) => (
              <span
                key={type}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
