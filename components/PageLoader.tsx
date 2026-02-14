'use client';

import { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the CSS animation to fully complete
    // Animation starts at 1400ms and runs for 600ms = 2000ms total
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.spinner}>
        <svg className={styles.ring} viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
          <circle className={styles.track} cx="50" cy="50" r="40" />
          <circle className={styles.progress} cx="50" cy="50" r="40" stroke="url(#gradient)" />
        </svg>
        <span className={styles.initials}>PS</span>
      </div>
    </div>
  );
};

export default PageLoader;
