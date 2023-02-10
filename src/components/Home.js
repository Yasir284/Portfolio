import { motion } from "framer-motion";

import mainImage from "../assets/header-img.svg";

const imageVaritent = {
  animate: { y: [20, -10, 10, -10] },
  transition: {
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "mirror",
    duration: 5,
  },
};

export default function Home() {
  return (
    <section id="home" className="h-[90vh]">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1>
            Hello World!, I'm <span>Yasir Lambawala</span>
          </h1>
          <p>
            A <span>Fullstack developer</span>
          </p>
        </div>
        <motion.div {...imageVaritent}>
          <img src={mainImage} alt="Main page svg" />
        </motion.div>
      </div>
    </section>
  );
}
