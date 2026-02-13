'use client';

import { useEffect } from 'react';

export default function AntdWarningSuppress() {
  useEffect(() => {
    // Store original console.warn
    const originalWarn = console.warn;

    // Override console.warn to filter out Ant Design compatibility warnings
    console.warn = (...args: any[]) => {
      const message = args[0]?.toString() || '';

      // Filter out the specific Ant Design React compatibility warning
      if (
        message.includes('[antd: compatible]') ||
        message.includes('antd v5 support React is')
      ) {
        return; // Suppress this warning
      }

      // Let all other warnings through
      originalWarn.apply(console, args);
    };

    // Cleanup: restore original console.warn on unmount
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return null; // This component doesn't render anything
}
