// Dependencies
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";

// Images
import mainImage from "../assets/images/header-img.svg";

// Components
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
    <section id="home" className="relative h-[90vh] bg-fixed font-Balsamiq">
      <div className="mx-6 grid h-full grid-cols-2 items-start justify-between sm:items-center md:mx-20">
        <div className="col-span-full mt-10 flex flex-col items-center justify-center text-4xl font-extrabold sm:mt-0 md:col-span-1 md:items-start">
          <h1 className="mb-4 text-7xl">
            <AnimatedLetter
              text={"Hi, I'am Yasir"}
              className="justify-center sm:justify-start"
            />
          </h1>

          <p className="text-3xl font-bold">
            <AnimatedWord
              text={
                "A fullstack Javascript developer with proficiency in frontend."
              }
              className="justify-center md:justify-start"
            />
          </p>

          <button>
            <Link
              to="about"
              smooth={true}
              offset={-60}
              className="mt-10 flex items-center justify-center gap-4 rounded-full border border-white bg-white py-2 px-4 text-black transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white"
            >
              <p className="text-lg">Know more about me</p>
              <FaAngleDoubleDown size="1.5rem" className="animate-pulse" />
            </Link>
          </button>
        </div>

        <motion.div
          {...imageVaritent}
          className="absolute -bottom-10 right-0 left-10 -z-10 col-span-full mx-auto sm:static md:col-span-1 md:w-full"
        >
          <img src={mainImage} className="w-full" alt="Main page svg" />
        </motion.div>
      </div>
    </section>
  );
}
