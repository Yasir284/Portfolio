import { motion } from "framer-motion";
import AnimatedWord from "./sub-components/AnimatedWord";

// Images
import shapes from "../assets/images/backgrounds/shapes.svg";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css3.png";
import express from "../assets/images/skills/express.png";
import javascript from "../assets/images/skills/java-script.png";
import mongodb from "../assets/images/skills/mongodb.ico";
import nodejs from "../assets/images/skills/node-js.png";
import react from "../assets/images/skills/react.png";
import appwrite from "../assets/images/skills/appwrite.webp";
import AnimatedLetter from "./sub-components/AnimatedLetter";

const skills = [
  {
    name: "Html",
    src: html,
  },
  {
    name: "Css",
    src: css,
  },
  {
    name: "JavaScript",
    src: javascript,
  },
  {
    name: "React",
    src: react,
  },
  {
    name: "NodeJS",
    src: nodejs,
  },
  {
    name: "Express",
    src: express,
  },
  {
    name: "MongoDB",
    src: mongodb,
  },
  {
    name: "Appwrite",
    src: appwrite,
  },
];

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
