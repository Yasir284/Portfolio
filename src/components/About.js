import myImage from "../assets/images/my-image.png";
import AnimatedWord from "./sub-components/AnimatedWord";
import { motion } from "framer-motion";

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

// Array of objects
const qualifications = [
  {
    qualification: "Bachelor of engineering",
    year: "June 2022",
    description:
      "I have completed my Btech in mechanical engineering at Gujarat Technological University, from S.V.I.T, Vasad.",
  },
  {
    qualification: " Higher Secondary Education",
    year: "March 2018",
    description:
      " I have completed my higher secondary education from Baroda public school, Vadadora.",
  },
  {
    qualification: "Secondary Education",
    year: "March 2016",
    description:
      "I have completed my secondary education from Zenith high school, Vadadora.",
  },
];

export default function About() {
  return (
    <motion.section {...containerVarient} id="about" className="mt-20">
      <div className="flex h-[100vh] flex-row justify-between gap-8 p-12">
        <motion.div
          {...imageVaritent}
          className="mx-auto h-64 w-48 overflow-hidden rounded-3xl bg-black-800 shadow-lg shadow-black-800"
        >
          <img src={myImage} className="" alt="Yasir" />
        </motion.div>

        {/* About me */}
        <motion.div className="basis-2/3">
          <div>
            <h2 className="mb-4 border-b border-black-700 font-Balsamiq text-3xl font-extrabold">
              <AnimatedWord text={"About me"} />
            </h2>
            <p>
              <AnimatedWord
                text="
            I am Yasir Lambawala, born and brought up in Vadodara, Gujarat. I am
            a fullstack Javascript developer with proficiency in frontend and
            now I am exploring the backend. I and got interested in web development while pursuing
            Btech. I love to watch Marvel & DC movies and Anime.
            "
              />
            </p>
          </div>

          {/* Education timeline */}
          <div className="relative col-span-12 mt-12 space-y-6 px-4 sm:col-span-9">
            <div className="relative col-span-12 space-y-12 px-4 before:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5">
              {qualifications.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col before:bg-gradient-to-br before:from-[#b680c5] before:to-[#69589a] sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
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
        </motion.div>
      </div>
    </motion.section>
  );
}
