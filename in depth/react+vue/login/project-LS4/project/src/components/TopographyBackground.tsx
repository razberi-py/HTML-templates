import React from 'react';

export const TopographyBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden animate-[pulse_8s_ease-in-out_infinite]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,0,0,0))]" />
      <svg
        className="absolute h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)">
              <animate
                attributeName="stop-color"
                values="rgba(255,255,255,0.3);rgba(255,182,255,0.3);rgba(255,255,255,0.3)"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="rgba(255,182,255,0.3)">
              <animate
                attributeName="stop-color"
                values="rgba(255,182,255,0.3);rgba(255,255,255,0.3);rgba(255,182,255,0.3)"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <pattern
            id="topography-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2) rotate(0)"
          >
            <path
              d="M.5 0C.5 27.614 23.386 50.5 51 50.5c27.614 0 50.5-22.886 50.5-50.5h-101z"
              fill="none"
              stroke="url(#glow)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#topography-pattern)"
          className="animate-[topo_20s_linear_infinite] origin-center mix-blend-overlay"
        />
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#topography-pattern)"
          className="animate-[topo_30s_linear_infinite] origin-center mix-blend-soft-light"
        />
      </svg>
    </div>
  );
};