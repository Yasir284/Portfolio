import { useState } from "react";
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";

// Components and helpers
import projects from "../helpers/content/projects";
import ProjectDetail from "./modal/ProjectDetail";

const cardVarient = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  whileHover: { y: -20 },
  viewport: { once: true },
  transition: {
    opacity: { delay: 0.2 },
    x: { delay: 0.2 },
  },
};

const textVarient = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.3 },
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
    <section id="projects" className="custom-bg min-h-screen py-10">
      <div className="px-6 md:px-20">
        <h2 className="mx-auto w-fit font-Balsamiq text-4xl font-extrabold">
          Projects
        </h2>
        <hr className="mb-4 border-black-700" />

        {/* Project category list */}
        <ul className="flex flex-row flex-wrap items-center justify-center gap-4 rounded-md md:mx-auto md:w-fit md:gap-0 md:shadow-inner md:shadow-black">
          {itemList.map((list, index) => (
            <li
              onClick={() => list.onClick()}
              key={index}
              className={`cursor-pointer rounded-md py-2 px-4 text-center font-bold uppercase transition-all duration-200 ease-in-out active:scale-90 sm:w-36 ${
                acitveId === list.id
                  ? "bg-white text-black shadow-inner shadow-black-700"
                  : "md:backdrop-blur-sm md:backdrop-filter"
              }`}
            >
              {list.name}
            </li>
          ))}
        </ul>

        {/* Projects */}
        <div className="myScrollbar mx-auto mt-4 flex h-[90vh] flex-row flex-wrap justify-center gap-8 overflow-y-scroll rounded-md py-4 sm:py-12 md:w-[86vw]">
          {projects
            .filter((e) => e.category === category)
            .reverse()
            .map((project, index) => (
              <motion.div
                {...cardVarient}
                key={project.id}
                layoutId={index}
                layout
                className="group flex flex-col items-center gap-6 rounded-md active:scale-90"
              >
                <div className="relative flex aspect-video w-80 items-center justify-center rounded-md border border-black-700 bg-black-900 shadow-lg shadow-black sm:w-96">
                  <img
                    src={project.images[0]}
                    className="aspect-video w-full rounded-md object-contain"
                    loading="lazy"
                    alt={project.name + " image"}
                  />

                  <div
                    onClick={() => setActiveModal({ active: true, project })}
                    className="absolute top-0 right-0 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md bg-black bg-opacity-30 opacity-0 shadow-inner shadow-black-700 backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out group-hover:opacity-100"
                  >
                    <p className="text-xl font-bold">Click to know more</p>
                    <GiClick size="2rem" className="animate-ping" />
                  </div>
                </div>

                <motion.h2
                  {...textVarient}
                  className="mx-auto w-fit border-b border-black-700 text-2xl font-bold"
                >
                  {project.name}
                </motion.h2>
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
