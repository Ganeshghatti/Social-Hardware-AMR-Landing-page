"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 5000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type, duration };
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (message, duration) => addToast(message, "success", duration);
  const showError = (message, duration) => addToast(message, "error", duration);
  const showInfo = (message, duration) => addToast(message, "info", duration);

  return (
    <ToastContext.Provider value={{ addToast, showSuccess, showError, showInfo, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

function ToastContainer({ toasts, removeToast }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>,
    document.body
  );
}

function Toast({ toast, onRemove }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => onRemove(toast.id), 300);
  };

  const getToastStyles = () => {
    const baseStyles = "flex items-center p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ease-in-out";
    
    switch (toast.type) {
      case "success":
        return `${baseStyles} bg-green-50 border border-green-200 text-green-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      case "error":
        return `${baseStyles} bg-red-50 border border-red-200 text-red-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      case "info":
        return `${baseStyles} bg-blue-50 border border-blue-200 text-blue-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
      default:
        return `${baseStyles} bg-gray-50 border border-gray-200 text-gray-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <FaCheckCircle className="text-green-600 flex-shrink-0" />;
      case "error":
        return <FaExclamationCircle className="text-red-600 flex-shrink-0" />;
      case "info":
        return <FaInfoCircle className="text-blue-600 flex-shrink-0" />;
      default:
        return <FaInfoCircle className="text-gray-600 flex-shrink-0" />;
    }
  };

  return (
    <div className={getToastStyles()}>
      <div className="flex-shrink-0 mr-3">
        {getIcon()}
      </div>
      <div className="flex-1 text-sm font-medium">
        {toast.message}
      </div>
      <button
        onClick={handleRemove}
        className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
} 