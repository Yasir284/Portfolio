import { useRef, useState } from "react";
import { Click } from "../assets/icons/icons";
import { AnimatePresence, motion } from "framer-motion";

// Components and helpers
import projects from "../helpers/content/projects";
import ProjectDetail from "./modal/ProjectDetail";

// Icons
import { ArrowLeft, ArrowRight } from "../assets/icons/icons";

const cardVarient = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  whileHover: { y: -20 },
  viewport: { once: true },
  transition: {
    opacity: { delay: 0.2 },
    x: { delay: 0.2 },
  },
  exit: { opacity: 0 },
};

const textVarient = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.2 },
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
  const sliderRef = useRef();
  const [category, setCategory] = useState("Javascript");
  const [acitveId, setActiveId] = useState(itemList[2].id);
  const [activeModal, setActiveModal] = useState({
    active: false,
    project: "",
  });

  const slidePrev = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.children[0].clientWidth;
  };

  const slideNext = () => {
    sliderRef.current.scrollLeft += sliderRef.current.children[0].clientWidth;
  };

  return (
    <section id="projects" className="custom-bg relative min-h-screen py-10">
      <div className="px-6 md:px-20">
        <h2 className="mx-auto w-fit text-4xl">Projects</h2>
        <hr className="mb-12 border-black-700" />

        {/* Project category list */}
        <ul className="flex flex-row flex-wrap items-center justify-center gap-x-4 rounded-md md:mx-auto md:w-fit md:gap-0 md:shadow-inner md:shadow-black-800">
          {itemList.map((list, index) => (
            <li
              onClick={() => list.onClick()}
              key={index}
              className={`cursor-pointer rounded-md py-2 px-4 text-center font-bold uppercase transition-all duration-200 ease-in-out active:scale-90 sm:w-36 ${
                acitveId === list.id
                  ? "bg-white text-black shadow-inner shadow-black-700"
                  : "hover:bg-white hover:bg-opacity-25 hover:backdrop-blur-sm hover:backdrop-filter md:backdrop-blur-sm md:backdrop-filter"
              }`}
            >
              {list.name}
            </li>
          ))}
        </ul>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            ref={sliderRef}
            // onWheel={(e) => {
            //   e.preventDefault();
            //   sliderRef.current.scrollLeft += e.deltaY;
            // }}
            className="myScrollbar mx-auto mt-4 flex flex-shrink-0 snap-x snap-mandatory flex-row items-center gap-8 overflow-x-auto scroll-smooth rounded-md py-4 transition-all duration-500 ease-in-out sm:py-12"
          >
            {projects
              .filter((e) => e.category === category)
              .reverse()
              .map((project) => (
                <motion.div
                  {...cardVarient}
                  key={project.id}
                  layout="position"
                  className="group flex h-fit snap-start flex-col items-center gap-6 rounded-md active:scale-90"
                >
                  <div className="relative flex aspect-video w-80 items-center justify-center rounded-md border border-black-700 bg-black bg-opacity-25 shadow-lg shadow-black backdrop-blur-sm backdrop-filter sm:w-96">
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
                      <Click size="2rem" className="animate-ping" />
                    </div>
                  </div>

                  <motion.h2
                    {...textVarient}
                    className="w-fit border-b border-black-700 text-center text-2xl font-bold"
                  >
                    {project.name}
                  </motion.h2>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
        {(window.innerWidth < 1379 ||
          projects.filter((e) => e.category === category).length > 3) && (
          <>
            {/* Previous button */}
            <button
              onClick={slidePrev}
              className="absolute top-[48%] left-[5%] aspect-square h-fit w-fit rounded-full border-2 bg-black bg-opacity-10 p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100 active:scale-75"
            >
              <ArrowLeft size="1.5rem" />
            </button>

            {/* Next button */}
            <button
              onClick={slideNext}
              className="absolute top-[48%] right-[5%] aspect-square h-fit w-fit rounded-full border-2 bg-black bg-opacity-10 p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100 active:scale-75"
            >
              <ArrowRight size="1.5rem" />
            </button>
          </>
        )}
      </div>

      <ProjectDetail
        active={activeModal.active}
        project={activeModal.project}
        setActiveModal={setActiveModal}
      />
    </section>
  );
}
