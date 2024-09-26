"use client"
import React, { useEffect } from 'react';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element');

    elements.forEach((element) => {
      const moveElement = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 5 + 5; // Duração entre 5 a 10 segundos

        (element as HTMLElement).style.transition = `transform ${duration}s ease-in-out`;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      };

      moveElement();
      setInterval(moveElement, 8000); // Muda a posição a cada 8 segundos
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-16 h-16 bg-purple-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-24 h-24 bg-indigo-950 opacity-50 rounded-full absolute"></div>
      <div className="floating-element w-20 h-20 bg-fuchsia-950 opacity-50 rounded-full absolute"></div>
    </div>
  );
};

export default FloatingElements;