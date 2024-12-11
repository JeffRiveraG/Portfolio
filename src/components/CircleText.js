import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype'; // Ensure you have the CircleType library installed

const RotatingText = () => {
  const textRef = useRef(null); // Reference for the text element
  let angle = useRef(0); // Keep angle as a mutable reference

  useEffect(() => {
    // Initialize CircleType with the text element
    if (textRef.current) {
      new CircleType(textRef.current).radius(1); // Set the radius of the circle
    }

    // Function to rotate the text
    const rotateText = () => {
      angle.current += 0.1; // Increment the angle
      if (textRef.current) {
        textRef.current.style.transform = `rotate(${angle.current}deg)`;
      }
      requestAnimationFrame(rotateText); // Keep rotating
    };

    rotateText(); // Start rotation

    return () => {
      // Cleanup function (not strictly necessary but good practice)
      cancelAnimationFrame(rotateText);
    };
  }, []);

  return (
    <div>
      <p ref={textRef} id="circle-text" className='text-xs'> {/* text-white mix-blend-multiply */}
        LET ME PUT YOU ON &#8226; LET ME PUT YOU ON &#8226; LET ME PUT YOU ON &#8226; LET ME PUT YOU ON &#8226;
      </p>
    </div>
  );
};

export default RotatingText;
