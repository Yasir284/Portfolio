// Dependencies and react hooks
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Icons
import { Hamburge, Close } from "../assets/icons/icons";

// Helper
import navItems from "../helpers/navItems";

const navVarient = {
  initial: { opacity: 0, y: "-100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100vh" },
  transition: { type: "just" },
};

export default function Navbar() {
  const [active, setActive] = useState(true);

  const [activeListId, setActiveListId] = useState(null);

  function getCompInView(component) {
    component?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveListId(entry.target.id);
          }

          if (window.innerWidth >= 768 && entry.target.id === "home") {
            const navbar = document.querySelector("nav");

            entry.isIntersecting
              ? navbar.classList.remove("opacity-0", "hover:opacity-100")
              : navbar.classList.add("opacity-0", "hover:opacity-100");
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <nav className="sticky top-0 right-0 z-20 hidden backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out md:block md:w-auto">
        <div className="flex flex-row items-center justify-between border-b border-black-700 py-3 px-6 font-Roboto tracking-widest sm:py-4 md:px-20">
          <div
            onClick={() =>
              getCompInView(document.getElementById(navItems[0].id))
            }
            className="cursor-pointer"
          >
            <h1 className="font-Balsamiq text-2xl font-bold">My Portfolio</h1>
          </div>

          <ul className="flex flex-row items-center gap-6 uppercase">
            {navItems.map((list) => (
              <li
                key={list.id}
                onClick={() => getCompInView(document.getElementById(list.id))}
                className={`cursor-pointer rounded-md border-2 border-transparent px-4 py-2 font-bold transition-all duration-200 ease-in-out hover:border-white active:scale-90 ${
                  activeListId === list.id ? "bg-white text-black" : ""
                }`}
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hamburger menu button */}
      <button
        onClick={() => setActive(!active)}
        className="fixed right-6 top-4 z-20 rounded-full bg-black bg-opacity-20 text-white shadow-md shadow-black backdrop-blur-sm backdrop-filter transition-all duration-200 ease-in-out active:scale-75 md:hidden"
      >
        {active ? (
          <Hamburge className="m-3 text-[1.5rem] sm:text-[2rem]" />
        ) : (
          <Close className="m-3 text-[1.5rem] sm:text-[2rem]" />
        )}
      </button>

      {/* Hamburger menu*/}
      <AnimatePresence>
        {active === false && (
          <motion.div
            key={active}
            {...navVarient}
            className="fixed top-0 right-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"
          >
            <motion.ul className="w-full flex-col items-center uppercase md:flex">
              {navItems.map((list) => (
                <li
                  onClick={() =>
                    getCompInView(document.getElementById(list.id))
                  }
                  key={list.id}
                  className="w-full cursor-pointer py-6 text-center text-base font-bold transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.53)]"
                >
                  <p>{list.name}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
