import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";

// Images
import shapes from "../assets/images/backgrounds/shapes.svg";

// Components and helpers
import projects from "../helpers/projects";
import AnimatedWord from "./sub-components/AnimatedWord";
import ProjectDetail from "./modal/ProjectDetail";

const cardVarient = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  whileHover: { y: -20 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 12,
    duration: 1,
    opacity: { delay: 0.2 },
    x: { delay: 0.2 },
  },
};

const textVarient = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.35 },
};

export default function Projects() {
  const itemList = [
    {
      id: 1,
      name: "Html & Css",
      onClick: function () {
        setActiveId(this.id);
        setCategory(this.name);
      },
    },
    {
      id: 2,
      name: "Tailwind",
      onClick: function () {
        setActiveId(this.id);
        setCategory(this.name);
      },
    },
    {
      id: 3,
      name: "Javascript",
      onClick: function () {
        setActiveId(this.id);
        setCategory(this.name);
      },
    },
    {
      id: 4,
      name: "React",
      onClick: function () {
        setActiveId(this.id);
        setCategory(this.name);
      },
    },
    {
      id: 5,
      name: "MERN",
      onClick: function () {
        setActiveId(this.id);
        setCategory(this.name);
      },
    },
  ];

  const [category, setCategory] = useState("Javascript");
  const [acitveId, setActiveId] = useState(itemList[2].id);
  const [activeModal, setActiveModal] = useState({
    active: false,
    project: "",
  });

  return (
    <section id="projects" className="min-h-screen py-10">
      <div>
        <h2 className="mx-auto w-fit font-Balsamiq text-3xl font-extrabold">
          <AnimatedWord text={"Projects"} />
        </h2>
        <hr className="mb-4 border-black-700" />

        {/* Project category list */}
        <ul className="mx-auto flex w-fit flex-row items-center justify-center rounded-md shadow-inner shadow-black">
          {itemList.map((list, index) => (
            <li
              onClick={() => list.onClick()}
              key={index}
              className={`w-36 cursor-pointer rounded-md py-2 px-4 text-center font-bold uppercase transition-all duration-200 ease-in-out active:scale-90 ${
                acitveId === list.id
                  ? "bg-gradient-to-br from-[#b680c5] to-[#69589a] shadow-inner shadow-black-700"
                  : "backdrop-blur-sm backdrop-filter"
              }`}
            >
              {list.name}
            </li>
          ))}
        </ul>

        <div
          className="myScrollbar mx-auto mt-4 flex h-[68vh] w-[86vw] flex-row flex-wrap justify-center gap-y-28 gap-x-8 overflow-y-scroll rounded-md pb-12 pt-20 shadow-xl shadow-black"
          style={{ backgroundImage: `url(${shapes})` }}
        >
          {projects
            .filter((e) => e.category === category)
            .reverse()
            .map((project, index) => (
              <motion.div
                viewport={{ once: true }}
                {...cardVarient}
                layoutId={index}
                layout
                className="group relative flex flex-col items-center justify-between gap-2 rounded-md bg-black-900 pb-10 shadow-lg shadow-black active:scale-90"
              >
                <div className="flex aspect-video w-96 items-center justify-center rounded-md border border-black-700 bg-black-900">
                  <img
                    className="rounded-md object-cover"
                    src={project.images[0]}
                    alt={project.name + " image"}
                  />
                </div>

                <motion.h2
                  {...textVarient}
                  className="mx-auto w-fit border-b border-black-700 text-2xl font-bold"
                >
                  {project.name}
                </motion.h2>

                <div
                  onClick={() => setActiveModal({ active: true, project })}
                  className="absolute top-0 right-0 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-25 opacity-0 shadow-inner shadow-black-700 backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out group-hover:opacity-100"
                >
                  <BsPlusLg size="2rem" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <ProjectDetail
        active={activeModal.active}
        project={activeModal.project}
        setActiveModal={setActiveModal}
      />
    </section>
  );
}
