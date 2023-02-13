import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";

// Components and helpers
import projects from "../helpers/projects";
import AnimatedWord from "./sub-components/AnimatedWord";
import ProjectDetail from "./modal/ProjectDetail";

const cardAnimation = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  whileHover: { y: -20 },
  transition: { type: "spring", stiffness: 100, damping: 12, duration: 1 },
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
    active: true,
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

        <div className="mt-4 flex h-[60vh] flex-row flex-wrap justify-center gap-6 overflow-y-auto py-12">
          {projects
            .filter((e) => e.category === category)
            .map((project, index) => (
              <motion.div
                {...cardAnimation}
                key={index}
                className="group relative flex flex-col items-center gap-2 rounded-md bg-black pb-10 active:scale-90"
              >
                <div className="flex aspect-video w-96 items-center justify-center rounded-md bg-black">
                  <img
                    className="rounded-md object-cover"
                    src={project.images[0]}
                    alt={project.name + " image"}
                  />
                </div>

                <h2 className="mx-auto w-fit border-b border-black-700 text-2xl font-bold">
                  <AnimatedWord text={project.name} />
                </h2>

                <div
                  onClick={() => setActiveModal({ active: true, project })}
                  className="absolute top-0 right-0 flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-[rgba(182,128,197,0.2)] to-[rgba(104,88,154,0.2)] opacity-0 shadow-inner shadow-black-700 backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out group-hover:opacity-100"
                >
                  <BsPlusLg size="2rem" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {activeModal.active && (
        <ProjectDetail
          active={activeModal.active}
          project={activeModal.project}
          setActiveModal={setActiveModal}
        />
      )}
    </section>
  );
}
