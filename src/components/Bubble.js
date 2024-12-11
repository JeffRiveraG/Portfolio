import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Bubble = ({ x, size, delay, onAnimationComplete }) => (
  <motion.div
    className="bubble"
    style={{
      width: size,
      height: size,
      position: "absolute",
      bottom: -size,
      left: x,
      backgroundColor: "black", // Light blue
      borderRadius: "50%",
      mixBlendMode: "multiply",
    }}
    initial={{ y: 0 }}
    animate={{ y: `-100vh` }}
    transition={{ duration: 5, delay }}
    onAnimationComplete={onAnimationComplete}
  />
);

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBubble = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        size: Math.random() * 50 + 10, // Random size between 10 and 60
        delay: Math.random() * 2, // Random delay
      };
      setBubbles((prev) => [...prev, newBubble]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          {...bubble}
          onAnimationComplete={() => setBubbles((prev) => prev.filter((b) => b.id !== bubble.id))}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
