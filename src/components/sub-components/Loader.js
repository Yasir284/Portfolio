import { AnimatePresence, motion } from "framer-motion";

// React Icons
import { ImSpinner2 } from "react-icons/im";

export default function Loader({ pageLoading }) {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
        className="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-4 bg-black bg-opacity-30 text-white backdrop-blur-sm"
      >
        {pageLoading && (
          // <motion.h1
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   className="text-3xl font-bold"
          // >
          //   Welcome To My Portfolio
          // </motion.h1>
          <div
            className="glitch text-center text-4xl font-bold"
            data-glitch="Welcome To My Portfolio"
          >
            Welcome To My Portfolio
          </div>
        )}
        <ImSpinner2
          className="animate-spin transition-all duration-200 ease-in-out"
          size="2rem"
        />
      </motion.div>
    </AnimatePresence>
  );
}
