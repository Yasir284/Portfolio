import { motion } from "framer-motion";

export default function AnimateCards({ index, children, className, viewOnce }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: viewOnce === true ? true : false }}
      whileHover={{ y: -20 }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 100,
        opacity: {
          delay: window.innerWidth > 768 ? 0.2 * index : 0.2,
        },
      }}
      key={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}
