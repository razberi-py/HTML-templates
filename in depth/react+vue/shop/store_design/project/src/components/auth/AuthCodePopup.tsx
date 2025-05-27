import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AuthCodePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthCodePopup: React.FC<AuthCodePopupProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { verifyAuthCode } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!code.trim()) {
      setError('Please enter an authorization code');
      return;
    }

    const result = verifyAuthCode(code);
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        onClose();
        setCode('');
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-bold text-white mb-4">Enter Authorization Code</h2>
        
        {error && (
          <div className="mb-4 bg-red-900 border-l-4 border-red-500 p-3 rounded">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-4 bg-green-900 border-l-4 border-green-500 p-3 rounded">
            <p className="text-sm text-green-300">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="auth-code" className="block text-sm font-medium text-gray-300 mb-2">
              Authorization Code
            </label>
            <input
              type="text"
              id="auth-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
              placeholder="Enter code"
              autoComplete="off"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthCodePopup;