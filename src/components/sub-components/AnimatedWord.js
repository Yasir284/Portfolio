import { motion } from "framer-motion";

export default function AnimatedWord({ text }) {
  const words = text.split(" ");

  const containerVarient = {
    initial: {
      opacity: 0,
    },
    animate: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1 * i,
      },
    }),
  };

  const childVarient = {
    initial: {
      opacity: 0,
      x: -20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.span
      variants={containerVarient}
      initial="initial"
      whileInView="animate"
      className="flex flex-wrap"
    >
      {words.map((word, index) => (
        <motion.span variants={childVarient} key={index} className="mr-3">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
