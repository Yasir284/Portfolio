// Dependencies
import { motion } from "framer-motion";

// React icons
import { HiOutlineDownload } from "react-icons/hi";

// Components and helpers
import qualifications from "../helpers/content/qualification";
import AnimatedWord from "./sub-components/AnimatedWord";

// Images
import shapes from "../assets/images/backgrounds/shapes.svg";
import myImage from "../assets/images/my-image.png";
import aboutMe from "../helpers/content/aboutMe";

// Framer motion animation varients
const imageVaritent = {
  whileInView: {
    y: [20, -10, 10, -10],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
      duration: 5,
      delay: 1,
    },
  },
};

const containerVarient = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export default function About() {
  return (
    <motion.section
      {...containerVarient}
      viewport={{ once: true }}
      id="about"
      style={{
        backgroundImage: `url(${shapes})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-12 px-6 md:px-20"
    >
      <div className="flex flex-col items-end gap-10 md:gap-4">
        <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:gap-0">
          <div className="flex flex-col items-center sm:basis-[30%]">
            <motion.div
              {...imageVaritent}
              className="h-52 w-36 overflow-hidden rounded-3xl bg-black-800 shadow-lg shadow-black-800 md:h-64 md:w-48"
            >
              <img src={myImage} alt="Yasir" />
            </motion.div>

            <button className="mt-6 flex items-center justify-center gap-4 rounded-full border border-white bg-white px-4 py-2 text-black transition-all duration-200  ease-in-out hover:bg-transparent hover:text-white">
              <a
                href="https://drive.google.com/file/d/1Yu6sOByAG_06BWlkqyVs8zQbKdR82Tgw/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <HiOutlineDownload size="1.5rem" />
            </button>
          </div>

          {/* About me */}
          <motion.div className="sm:basis-[70%]">
            <h2 className="mb-2 text-4xl font-extrabold">
              <AnimatedWord
                text={"About me"}
                viewOnce={true}
                className="justify-center sm:justify-start"
              />
            </h2>
            <hr className="mb-4 border-black-700" />
            <p>
              <AnimatedWord
                text={aboutMe}
                viewOnce={true}
                className="justify-center sm:justify-start"
              />
            </p>
          </motion.div>
        </div>

        {/* Education timeline */}
        <div className="relative col-span-12 ml-5 sm:col-span-9 md:ml-0 md:-mt-28 md:w-[68%]">
          <div className="relative col-span-12 space-y-12 before:absolute before:top-2 before:bottom-0 before:-left-[23px] before:w-0.5 before:bg-gray-400 sm:col-span-8 sm:space-y-8">
            {qualifications.map((data, index) => (
              <div
                key={index}
                className="relative flex flex-col before:absolute before:top-2 before:left-[-30px] before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-gray-400"
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  <AnimatedWord text={data.qualification} />
                </h3>
                <time className="text-xs uppercase tracking-wide text-gray-400">
                  {data.year}
                </time>
                <p className="my-3">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
