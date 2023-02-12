// Dependencies
import { motion } from "framer-motion";

// Components and helpers
import AnimatedWord from "./sub-components/AnimatedWord";
import skills from "../helpers/skills";

// Images
import shapes from "../assets/images/backgrounds/shapes.svg";
import AnimatedLetter from "./sub-components/AnimatedLetter";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen"
      style={{
        background: `url(${shapes})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-[80%] py-10">
        <h1 className="mx-auto w-fit font-Balsamiq text-3xl font-extrabold">
          <AnimatedWord text="Skills" />
        </h1>
        <hr className="mb-4 border-black-700" />

        <motion.div className="flex flex-row flex-wrap justify-start gap-10">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -20 }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                opacity: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: 0.2 * index,
                },
                x: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: 0.2 * index,
                },
              }}
              key={index}
              className="flex w-48 flex-col items-center justify-center rounded-lg bg-black-900 p-10 uppercase shadow-md shadow-black-800"
            >
              <h2 className="text-xl font-bold">{skill.name}</h2>
              <div className="w-32">
                <img
                  className="object-cover"
                  src={skill.src}
                  alt={skill.name + " image"}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <h2 className="mx-auto w-fit pb-4 text-2xl">
        <AnimatedLetter text={"More coming soon..."} />
      </h2>
    </section>
  );
}
