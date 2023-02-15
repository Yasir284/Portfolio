import contact from "../assets/images/contact.svg";
import AnimatedWord from "./sub-components/AnimatedWord";

export default function Contact() {
  return (
    <section id="contact" className="p-12">
      <h2 className="mx-auto w-fit text-4xl">
        <AnimatedWord text={"Get in touch"} />
      </h2>
      <hr className="border border-black-700" />

      <div className="mx-auto mt-4 grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-black bg-opacity-20 px-8 py-16 backdrop-blur-sm backdrop-filter md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-400">
              Love coding as much as i do? lets discuss more about web
              development!
            </div>
          </div>
          <img src={contact} alt="contact" className="h-52 p-6 md:h-64" />
        </div>

        <form
          novalidate=""
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="w-full rounded border p-2 text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-violet-400 p-3 text-sm font-bold uppercase tracking-wide text-gray-900 active:scale-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
