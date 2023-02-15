import { motion } from "framer-motion";

export default function AnimateCards({ index, children, className, viewOnce }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: viewOnce === true ? true : false }}
      whileHover={{ y: -20 }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 100,
        opacity: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: 0.2 * index,
        },
        x: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: 0.2 * index,
        },
      }}
      key={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}
