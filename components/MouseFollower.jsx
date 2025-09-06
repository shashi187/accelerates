import React, { useEffect, useRef, useState } from 'react';

const MouseFollower = ({ children }) => {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Track mouse globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate ring following cursor
  useEffect(() => {
    const animate = () => {
      if (!ringRef.current) return;

      const ring = ringRef.current;
      const currentX = parseFloat(ring.style.left || '0');
      const currentY = parseFloat(ring.style.top || '0');

      const dx = mouseRef.current.x - currentX - 20;
      const dy = mouseRef.current.y - currentY - 20;

      ring.style.left = currentX + dx * 0.15 + 'px';
      ring.style.top = currentY + dy * 0.15 + 'px';

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      {/* Your App Content */}
      {children}

      {/* Follower elements (rendered globally) */}
      <div className='hidden md:inline'>
        <div
          ref={ringRef}
          className="fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9999]"
          style={{ left: 0, top: 0 }}
        />

        <div
          className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
          style={{
            left: dotPos.x - 4,
            top: dotPos.y - 4,
          }}
      />
    </div>  
    </>
  );
};

export default MouseFollower;
