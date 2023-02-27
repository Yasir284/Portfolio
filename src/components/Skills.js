// Components and helpers
import skills from "../helpers/skills";

// Images
import AnimatedLetter from "./sub-components/AnimatedLetter";
import AnimateCards from "./sub-components/AnimateCards";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="mx-auto px-6 py-10 md:px-20">
        <h2 className="mx-auto w-fit text-4xl font-extrabold">Skills</h2>
        <hr className="mb-4 border-black-700" />

        <div className="flex flex-row flex-wrap items-end justify-center gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <AnimateCards
                viewOnce={true}
                index={index}
                className="flex h-48 w-36 flex-col items-center justify-start gap-4 rounded-lg bg-gradient-to-br from-[rgba(96,63,113,1)] to-[rgba(134,61,97,1)] p-4 uppercase shadow-lg shadow-black sm:h-auto sm:w-48 sm:p-10"
              >
                <h2 className="text-xl font-bold">{skill.name}</h2>
                <div className="w-24 sm:w-32">
                  <img
                    src={skill.src}
                    className="object-cover"
                    loading="lazy"
                    alt={skill.name + " image"}
                  />
                </div>
              </AnimateCards>
            </div>
          ))}

          <h2 className="text-2xl">
            <AnimatedLetter text={"More coming soon..."} viewOnce={true} />
          </h2>
        </div>
      </div>
    </section>
  );
}
