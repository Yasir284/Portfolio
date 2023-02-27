import navItems from "../helpers/navItems";
import socialLinks from "../helpers/socialLinks";
import { TfiArrowCircleUp } from "react-icons/tfi";

export default function Footer() {
  function getCompInView(component) {
    component?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <footer className="relative flex flex-col gap-2 border-t border-black-700 bg-black-900 py-4 px-6 md:px-20">
      <div className="flex flex-row flex-wrap items-center justify-center md:justify-between">
        <div className="flex flex-row gap-6">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noreferrer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-black-900 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:scale-110 active:scale-90">
                <social.icon size="1.5rem" />
              </div>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row items-center gap-4 text-xs uppercase">
            {navItems.map((list, index) => (
              <li
                onClick={() => getCompInView(document.getElementById(list.id))}
                key={index}
                className="cursor-pointer p-2 text-gray-500 transition-all duration-200 ease-in-out hover:text-white active:scale-90"
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500">© Yasir Lambawala.</div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-4 left-0 right-0 z-10 mx-auto w-fit rounded-full bg-black"
      >
        <TfiArrowCircleUp
          size="2.2rem"
          className="text-gray-400 transition-all duration-200 ease-in-out hover:scale-105 hover:text-white"
        />
      </button>
    </footer>
  );
}
