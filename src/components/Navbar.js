// Dependencies and react hooks
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// React icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

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
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting && window.innerWidth >= 768) {
          document
            .querySelector("nav")
            .classList.add("opacity-0", "hover:opacity-100");
        } else {
          document
            .querySelector("nav")
            .classList.remove("opacity-0", "hover:opacity-100");
        }
      },
      { root: null, threshold: 0.3 }
    );
    const sectionOne = document.getElementById("home");
    sectionObserver.observe(sectionOne);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveListId(entry.target.id);
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
      <nav className="sticky top-0 right-0 z-20 backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out">
        <div className="flex flex-row items-center justify-between border-b border-black-700 py-3 px-6 font-Roboto tracking-widest sm:py-4 md:px-20">
          <div
            onClick={() =>
              getCompInView(document.getElementById(navItems[0].id))
            }
            className="cursor-pointer"
          >
            <h1 className="font-Balsamiq text-2xl font-bold">My Portfolio</h1>
          </div>

          <ul className="hidden flex-row items-center gap-6 uppercase md:flex">
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
          {/* Hamburger menu button */}
          <button
            onClick={() => setActive(!active)}
            className="block text-white transition-all duration-200 ease-in-out active:scale-75 md:hidden"
          >
            {active ? (
              <GiHamburgerMenu className="text-[1.5rem] sm:text-[2rem]" />
            ) : (
              <MdClose className="text-[1.5rem] sm:text-[2rem]" />
            )}
          </button>
        </div>
      </nav>

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
