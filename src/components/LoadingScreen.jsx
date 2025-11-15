import React, { useState, useEffect } from 'react';
import { LoaderOne } from '../components/ui/loader';

function LoadingScreen({ onLoadComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = async () => {
      // Wait for window to load
      if (document.readyState === 'complete') {
        // Add a minimum loading time for smooth UX (optional)
        await new Promise(resolve => setTimeout(resolve, 1500));
        startFadeOut();
      } else {
        window.addEventListener('load', async () => {
          await new Promise(resolve => setTimeout(resolve, 1500));
          startFadeOut();
        });
      }
    };

    const startFadeOut = () => {
      setFadeOut(true);
      // Wait for fade animation to complete before hiding
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadComplete) onLoadComplete();
      }, 800);
    };

    loadAssets();
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <LoaderOne />
    </div>
  );
}

export default LoadingScreen;
