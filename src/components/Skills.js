// Dependencies
import { motion } from "framer-motion";

// Components and helpers
import AnimatedWord from "./sub-components/AnimatedWord";
import skills from "../helpers/skills";

// Images
import shapes from "../assets/images/backgrounds/shapes.svg";
import AnimatedLetter from "./sub-components/AnimatedLetter";
import AnimateCards from "./sub-components/AnimateCards";

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
        <h2 className="mx-auto w-fit text-3xl font-extrabold">
          <AnimatedWord text="Skills" />
        </h2>
        <hr className="mb-4 border-black-700" />

        <motion.div className="flex flex-row flex-wrap justify-start gap-10">
          {skills.map((skill, index) => (
            <AnimateCards
              index={index}
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
            </AnimateCards>
          ))}
        </motion.div>
      </div>

      <h2 className="mx-auto w-fit pb-4 text-2xl">
        <AnimatedLetter text={"More coming soon..."} />
      </h2>
    </section>
  );
}
