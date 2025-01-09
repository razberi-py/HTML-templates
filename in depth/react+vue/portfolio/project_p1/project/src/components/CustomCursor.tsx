import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailer = trailerRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && trailer) {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        trailer.style.transform = `translate(${e.clientX - 32}px, ${e.clientY - 32}px)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailerRef} className="custom-cursor-trailer" />
    </>
  );
};