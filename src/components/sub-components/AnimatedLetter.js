import { motion } from "framer-motion";

export default function AnimatedLetter({ text }) {
  const letters = text.split("");

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
      y: 20,
      x: -20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={containerVarient}
      whileInView="animate"
      initial="initial"
      className="flex flex-wrap"
    >
      {letters.map((letter, index) => (
        <motion.span variants={childVarient} key={index} className="mr-1">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
