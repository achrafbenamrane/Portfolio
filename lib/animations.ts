export const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    z: 50,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export const glowVariants = {
  initial: {
    boxShadow: "0 0 0px rgba(0, 240, 255, 0)",
  },
  hover: {
    boxShadow: [
      "0 0 20px rgba(0, 240, 255, 0.5)",
      "0 0 40px rgba(0, 240, 255, 0.7)",
      "0 0 20px rgba(0, 240, 255, 0.5)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};
