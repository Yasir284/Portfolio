// Icons
import { ArrowDownwords } from "../assets/icons/icons";

// Images
import mainImage from "../assets/images/header-img.svg";

// Components
import AnimatedWord1 from "./sub-components/AnimatedWord1";
import AnimatedWord2 from "./sub-components/AnimatedWord2";

// const imageVaritent = {
//   animate: { y: [20, -10, 10, -10] },
//   transition: {
//     repeat: Infinity,
//     ease: "easeInOut",
//     repeatType: "mirror",
//     duration: 5,
//   },
// };

export default function Home() {
  function getCompInView(component) {
    component?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <section id="home" className="h-screen bg-fixed">
      <div className="relative mx-6 mt-[20%] grid h-full grid-cols-2 items-start justify-between sm:items-center md:mx-20 md:mt-0">
        <div className="col-span-full flex h-full flex-col items-center justify-start text-4xl font-bold sm:mt-0 md:col-span-1 md:items-start md:justify-center">
          <p className="mb-2">Hi there, 👋</p>
          <h1 className="my-4 text-5xl sm:text-6xl">
            <AnimatedWord2
              text={"I'm Yasir lambawala"}
              className="justify-center md:justify-start"
              viewOnce={true}
            />
          </h1>

          <p className="text-2xl font-bold sm:text-3xl">
            <AnimatedWord1
              text={"A Full-stack MERN developer with proficiency in frontend."}
              className="justify-center md:justify-start"
              viewOnce={true}
            />
          </p>

          <button
            onClick={() => getCompInView(document.getElementById("about"))}
            className="mt-10 flex items-center justify-center gap-4 rounded-full border border-white bg-white py-2 px-4 text-black transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white"
          >
            <p className="text-lg">Know more about me</p>
            <ArrowDownwords size="1.5rem" className="animate-pulse" />
          </button>
        </div>

        <div
          // {...imageVaritent}
          className="absolute top-[5%] right-0 left-10 -z-10 col-span-full mx-auto flex h-full w-full justify-center sm:top-[10%] sm:bottom-[20%] md:static md:col-span-1"
        >
          <img
            src={mainImage}
            className="w-[80%] md:w-full"
            loading="lazy"
            alt="Main page svg"
          />
        </div>
      </div>
    </section>
  );
}
