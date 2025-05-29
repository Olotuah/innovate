import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full ${className}`}
      rows={4}
      {...props}
    />
  );
}
