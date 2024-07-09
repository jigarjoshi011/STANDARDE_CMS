// components/AnimatedBackground.js
import React from 'react';

const AnimatedBackground = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="wave-line"
            style={{
              top: `${index * 20}%`,
              transform: 'rotate(-45deg)',
              animationDelay: `${-index * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(-100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
        .wave-line {
          position: absolute;
          width: 200%;
          height: 2px;
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 15px 15px;
          animation: wave 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;