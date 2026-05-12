"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum display time 2.5 seconds
    const minDisplayTime = 2500;
    const timer = setTimeout(() => {
      setFadeOut(true);
      // After fade out animation (0.5s), hide completely
      setTimeout(() => setVisible(false), 500);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 bg-clip-text text-transparent"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        A Glimpse Into My Professional Journey
      </h1>
      <p className="text-white mb-6 text-lg">Loading...</p>
      <div className="flex space-x-2">
        <span className="w-5 h-5 bg-purple-600 rounded-full animate-pulse animation-delay-0"></span>
        <span className="w-5 h-5 bg-pink-600 rounded-full animate-pulse animation-delay-200"></span>
        <span className="w-5 h-5 bg-pink-500 rounded-full animate-pulse animation-delay-400"></span>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 1.2s infinite ease-in-out;
        }
        .animation-delay-0 {
          animation-delay: 0s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}
