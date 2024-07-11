// src/components/ThemeWrapper.jsx
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`vh-100 text-bg-${theme}`}>
      {children}
    </div>
  );
}