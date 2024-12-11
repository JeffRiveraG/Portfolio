import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const variants = {
    initial: { y: "100%" }, // Start from the bottom
    animate: { y: "0%" },  // Fully visible
    exit: { y: "-100%" },  // Move to the top
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
