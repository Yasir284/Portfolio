// Dependencies
import { motion } from "framer-motion";

// Components and helpers
import AnimatedWord from "./sub-components/AnimatedWord";
import skills from "../helpers/skills";

// Images
import AnimatedLetter from "./sub-components/AnimatedLetter";
import AnimateCards from "./sub-components/AnimateCards";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="mx-auto px-6 py-10 md:px-20">
        <h2 className="mx-auto w-fit text-4xl font-extrabold">
          <AnimatedWord text="Skills" viewOnce={true} />
        </h2>
        <hr className="mb-4 border-black-700" />

        <motion.div className="flex flex-row flex-wrap items-end justify-center gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <AnimateCards
                viewOnce={true}
                index={index}
                className="flex h-52 w-40 flex-col items-center justify-start gap-4 rounded-lg bg-gradient-to-br from-[rgba(96,63,113,1)] to-[rgba(134,61,97,1)] p-10 uppercase shadow-lg shadow-black sm:h-auto sm:w-48"
              >
                <h2 className="text-xl font-bold">{skill.name}</h2>
                <div className="w-32">
                  <img
                    className="object-cover"
                    src={skill.src}
                    alt={skill.name + " image"}
                  />
                </div>
              </AnimateCards>
            </div>
          ))}

          <h2 className="text-2xl">
            <AnimatedLetter text={"More coming soon..."} viewOnce={true} />
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
