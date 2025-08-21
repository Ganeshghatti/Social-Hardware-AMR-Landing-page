"use client";

import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl max-w-5xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold z-10 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}


