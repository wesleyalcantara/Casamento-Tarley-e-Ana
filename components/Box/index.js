import React from 'react';
import 'tailwindcss/tailwind.css';


export function Box ({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-pink-100">
      {children}
    </div>
  );
};