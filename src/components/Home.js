import { motion } from "framer-motion";

import mainImage from "../assets/header-img.svg";
// import waves from "../assets/layered-waves.svg";
// import mountain from "../assets/mountain.svg";
// import moon from "../assets/Moon.svg";
// import star from "../assets/star.svg";
import AnimatedLetter from "./sub-components/AnimatedLetter";
import AnimatedWord from "./sub-components/AnimatedWord";

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
    <section
      id="home"
      className="h-[90vh] bg-fixed font-Balsamiq"
      // style={{
      //   backgroundImage: `url(${moon})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "bottom",
      // }}
    >
      <div className="mx-20 grid h-full grid-cols-2 items-center justify-between">
        <div className="col-span-1 text-4xl font-extrabold">
          <h1 className="mb-4 text-7xl">
            <AnimatedLetter text={"Hi, I'am Yasir"} />
          </h1>

          <p className="text-3xl font-bold leading-none">
            <AnimatedWord text={"A fullstack Javascript developer with "} />
            <AnimatedWord text={"proficiency in frontend."} />
          </p>
        </div>
        <motion.div {...imageVaritent} className="col-span-1">
          <img src={mainImage} className="w-full" alt="Main page svg" />
        </motion.div>
      </div>

      {/* <div className="">
        <img src={mountain} alt="mountain svg" />
      </div> */}
    </section>
  );
}
