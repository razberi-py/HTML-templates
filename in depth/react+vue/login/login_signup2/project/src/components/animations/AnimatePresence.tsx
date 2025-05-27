import React, { ReactNode, useRef, useEffect } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    // Apply entrance animation
    node.style.opacity = '0';
    node.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
      node.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
    });
    
    return () => {
      // This would handle exit animations if we had more complex transitions
    };
  }, [children]);

  return (
    <div ref={nodeRef} className="w-full">
      {children}
    </div>
  );
};