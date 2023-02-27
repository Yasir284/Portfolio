import { motion } from "framer-motion";

export default function AnimatedWord1({ text, viewOnce, className }) {
  const words = text?.split(" ");

  const containerVarient = {
    initial: {
      opacity: 1,
    },
    animate: (i = 1) => ({
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.12,
        delayChildren: 0.1 * i,
      },
    }),
  };

  const childVarient = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.span
      viewport={{ once: viewOnce === true ? true : false }}
      variants={containerVarient}
      initial="initial"
      whileInView="animate"
      className={`flex flex-wrap ${className ? className : ""}`}
    >
      {words?.map((word, index) => (
        <motion.span variants={childVarient} key={index} className="mr-3">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
