import { motion } from "framer-motion";

const MotionWrapper = ({ children, className = "", delay = 0, direction = "up" }) => {
  let initial;
  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 30 };
      break;
    case "down":
      initial = { opacity: 0, y: -30 };
      break;
    case "left":
      initial = { opacity: 0, x: 30 };
      break;
    case "right":
      initial = { opacity: 0, x: -30 };
      break;
    default:
      initial = { opacity: 0, y: 30 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
