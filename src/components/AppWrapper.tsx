"use client";

import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { CustomCursor } from "./ui/CustomCursor";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds minimum

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader />}
      {!loading && (
        <div
          style={{
            opacity: 1,
            animation: "fadeIn 1.5s ease-in-out forwards",
          }}
        >
          {children}
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
