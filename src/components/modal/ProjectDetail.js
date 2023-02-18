import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillPlayCircle,
  AiFillGithub,
  AiFillCloseCircle,
} from "react-icons/ai";
import AnimatedLetter from "../sub-components/AnimatedLetter";
import Slider from "../sub-components/Slider";
import shapes from "../../assets/images/backgrounds/shapes.svg";

const modalVarient = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function ProjectDetail({ project, active, setActiveModal }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          {...modalVarient}
          exit={{ opacity: 0 }}
          key={active}
          className="fixed top-0 right-0 z-20 flex h-full w-full flex-row items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm backdrop-filter"
        >
          <div
            className="relative m-4 flex rounded-3xl bg-red-500 px-4 py-16 sm:p-16 md:m-0 md:w-[80%]"
            style={{ backgroundImage: `url(${shapes})` }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModal({ active: false, project: "" })}
              className="absolute top-4 right-4 active:scale-90"
            >
              <AiFillCloseCircle size="2rem" />
            </button>

            <div className="flex flex-col gap-12 md:flex-row md:gap-6">
              <div>
                <Slider images={project.images} />
              </div>

              <div className="flex flex-col justify-center gap-4">
                {/* Name */}
                <h2 className="text-3xl font-extrabold">
                  <AnimatedLetter text={project.name} />
                </h2>

                {/* Description */}
                <p>{project.description}</p>

                {/* Links */}
                <div className="flex flex-row gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit flex-row items-center gap-3 rounded-md bg-white bg-opacity-20 px-4 py-2 font-Balsamiq font-bold backdrop-blur-sm backdrop-filter"
                  >
                    <AiFillPlayCircle size="1.5rem" className="text-red-500" />
                    <p>Live Link</p>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit flex-row items-center gap-3 rounded-md bg-white bg-opacity-20 px-4 py-2 font-Balsamiq font-bold backdrop-blur-sm backdrop-filter"
                  >
                    <AiFillGithub size="1.5rem" className="text-violet-500" />
                    <p>Github Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
