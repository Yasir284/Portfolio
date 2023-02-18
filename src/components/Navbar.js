// Dependencies and react hooks
import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

// React icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

// Helper
import navItems from "../helpers/navItems";

export default function Navbar() {
  const [active, setActive] = useState(true);

  return (
    <nav className="sticky top-0 right-0 z-20 backdrop-blur-md backdrop-filter">
      <div className="flex flex-row items-center justify-between border-b border-black-700 py-3 px-6 font-Roboto tracking-widest sm:py-6 md:px-20">
        <Link smooth={true} duration={500} to="home" className="cursor-pointer">
          <h1 className="font-Balsamiq text-2xl font-bold">My Portfolio</h1>
        </Link>

        <ul className="hidden flex-row items-center gap-6 uppercase md:flex">
          {navItems.map((list) => (
            <li key={list.id}>
              <Link
                activeClass="active"
                to={list.link}
                spy={true}
                smooth={true}
                offset={list.offset}
                duration={500}
                className="cursor-pointer rounded-md border-2 border-transparent px-4 py-2 transition-all duration-200 ease-in-out hover:border-white active:scale-90"
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>

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
      <AnimatePresence>
        {active === false && (
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter"
          >
            <motion.ul className="w-full flex-col items-center uppercase md:flex">
              {navItems.map((list) => (
                <li
                  key={list.id}
                  className="w-full cursor-pointer border-b border-black-700 py-3 text-center transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.53)]"
                >
                  <Link
                    activeClass="active"
                    to={list.link}
                    spy={true}
                    smooth={true}
                    offset={list.offset}
                    duration={500}
                    className="w-full"
                  >
                    <p>{list.name}</p>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
