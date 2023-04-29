import navItems from "../helpers/navItems";
import socialLinks from "../helpers/socialLinks";
import { ArrowCircleUp } from "../assets/icons/icons";
import mountain from "../assets/images/backgrounds/mountain.svg";

export default function Footer() {
  function getCompInView(component) {
    component?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <footer className="relative flex flex-col gap-2 border-t border-black-700 py-4 px-6 md:px-20">
      <img
        src={mountain}
        alt="mountain background"
        className="absolute bottom-0 left-0 right-0 -z-10"
      />
      <div className="flex flex-row flex-wrap items-center justify-center md:justify-between">
        <div className="flex flex-row gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              title={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-black-900 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:scale-110 active:scale-90">
                <social.icon size="1.5rem" title={`${social.name} icon`} />
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
                className="cursor-pointer p-2 text-white-300 transition-all duration-200 ease-in-out hover:text-white active:scale-90"
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-white-300">© Yasir Lambawala.</div>

      <button
        title="Scroll to top button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-4 left-0 right-0 z-10 mx-auto w-fit animate-pulse rounded-full bg-black hover:animate-none"
      >
        <ArrowCircleUp
          size="2.5rem"
          className="text-white-300 transition-all duration-200 ease-in-out hover:scale-105 hover:text-white"
        />
      </button>
    </footer>
  );
}
