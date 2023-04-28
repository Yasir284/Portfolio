// Dependencies
import { motion, AnimatePresence } from "framer-motion";
import {
  FillPlayCircle,
  FillGitHub,
  FillCloseCircle,
} from "../../assets/icons/icons";
import Slider from "../sub-components/Slider";
import mountain from "../../assets/images/backgrounds/mountain.svg";
import moon from "../../assets/images/backgrounds/Moon.svg";

// Framer motion animation varitent
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
            className="relative m-4 flex rounded-3xl px-4 py-16 sm:p-16 md:mx-10 lg:mx-40"
            style={{
              background: `linear-gradient(rgb(225,225,225,0.1),rgb(225,225,225,0.1)),bottom / contain no-repeat url(${mountain}), top / cover no-repeat url(${moon})`,
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModal({ active: false, project: "" })}
              className="absolute top-4 right-4 active:scale-90"
            >
              <FillCloseCircle size="2rem" />
            </button>

            <div className="flex flex-col gap-12 md:flex-row md:gap-6">
              <div>
                <Slider images={project.images} />
              </div>

              <div className="flex flex-col justify-center gap-4">
                {/* Name */}
                <h2 className="text-3xl font-extrabold">{project.name}</h2>

                {/* Description */}
                <p>{project.description}</p>

                {/* Links */}
                <div className="flex flex-row gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit flex-row items-center gap-3 rounded-md bg-red-500 bg-opacity-50 px-4 py-2 font-Balsamiq font-bold backdrop-blur-sm backdrop-filter"
                  >
                    <FillPlayCircle size="1.5rem" />
                    <p>Live Link</p>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit flex-row items-center gap-3 rounded-md bg-violet-500 bg-opacity-50 px-4 py-2 font-Balsamiq font-bold backdrop-blur-sm backdrop-filter"
                  >
                    <FillGitHub size="1.5rem" />
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
