// Dependencies
import { motion } from "framer-motion";

// React icons
import { HiOutlineDownload } from "react-icons/hi";

// Components and helpers
import qualifications from "../helpers/content/qualification";
import AnimatedWord from "./sub-components/AnimatedWord";

// Images
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
    <section id="about" className="custom-bg min-h-screen py-10 px-6 md:px-20">
      <motion.div
        {...containerVarient}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <h2 className="text-4xl font-extrabold">
          <AnimatedWord
            text={"About me"}
            viewOnce={true}
            className="justify-center"
          />
          <hr className="mt-2 border-black-700" />
        </h2>

        <div className="flex flex-col gap-12 md:flex-row md:gap-6">
          <div className="flex basis-[30%] flex-col-reverse items-center gap-6 sm:flex-col">
            <div className="flex flex-col items-center gap-6">
              <motion.div
                {...imageVaritent}
                className="h-52 w-36 overflow-hidden rounded-3xl bg-black-800 shadow-lg shadow-black-800 md:h-64 md:w-48"
              >
                <img src={myImage} alt="Yasir" />
              </motion.div>

              <button>
                <a
                  href="https://drive.google.com/file/d/1-CGYUTV3lUPzkYFIq9J7wq7tMI2dZ_fa/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 rounded-full border border-white bg-white px-4 py-2 text-black transition-all duration-200  ease-in-out hover:bg-transparent hover:text-white"
                >
                  Resume
                  <HiOutlineDownload size="1.5rem" />
                </a>
              </button>
            </div>

            <p className="text-center md:text-sm">{aboutMe}</p>
          </div>

          {/* Education timeline */}
          <div className="relative col-span-12 ml-6 basis-[70%] sm:col-span-9">
            <div className="relative col-span-12 space-y-12 before:absolute before:top-2 before:bottom-0 before:-left-[23px] before:w-0.5 before:bg-white sm:col-span-8 sm:space-y-8">
              {qualifications.map((data, index) => (
                <div
                  key={index}
                  className="relative flex flex-col before:absolute before:top-2 before:left-[-30px] before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-violet-400 sm:pb-6"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    <AnimatedWord text={data.qualification} viewOnce={true} />
                  </h3>
                  <time className="text-xs uppercase tracking-wide text-gray-400">
                    {data.year}
                  </time>
                  <p className="my-3 sm:mb-6">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
