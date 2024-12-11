import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedHamburgerButton = ({ onToggle }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
    onToggle(!active);
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={handleToggle}
        className="relative h-20 w-20 rounded-full bg-black/0 transition-colors hover:bg-black/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-10 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const NavigationMenu = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? "0%" : "100%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full w-full bg-gray-900 text-white flex items-center justify-center"
    >
      <ul className="text-center space-y-8">
        <li><Link to="/" className="text-2xl">Home</Link></li>
        <li><Link to="/works" className="text-2xl">Works</Link></li>
        <li><Link to="/about" className="text-2xl">About</Link></li>
        <li><Link to="/contact" className="text-2xl">Contact</Link></li>
      </ul>
    </motion.div>
  );
};

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {menuOpen && <NavigationMenu isOpen={menuOpen} />}
      <div className="absolute top-4 right-4 z-50">
        <AnimatedHamburgerButton onToggle={setMenuOpen} />
      </div>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "50%",
    },
  },
};

export default Hamburger;
