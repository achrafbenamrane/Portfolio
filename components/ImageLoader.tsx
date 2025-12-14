"use client";

import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function ImageLoader({ src, alt, className = "", onClick }: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate progress for better UX
  const handleLoadStart = () => {
    setLoading(true);
    setProgress(0);
    
    // Simulate progressive loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleLoad = () => {
    setProgress(100);
    setTimeout(() => setLoading(false), 200);
  };

  return (
    <div className="relative w-full h-full">
      {/* Loading Circle with Percentage */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm z-10">
          <div className="relative">
            {/* Animated Circle */}
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="8"
              />
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {Math.round(progress)}%
              </span>
            </div>
            
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
          </div>
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onClick={onClick}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
