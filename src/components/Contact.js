// Dependencies
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Images
import contact from "../assets/images/contact.svg";

// Components and helpers
import AnimatedWord from "./sub-components/AnimatedWord";
import { toast } from "react-toastify";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_ID,
} = process.env;
// const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
// const PUBLIC_ID = "2NZRItbuwUKgMHTMK";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          toast("Message sent", { type: "success" });
        },
        (error) => {
          toast("Error in sending your message", { type: "error" });
        }
      );
  };

  return (
    <section id="contact" className="p-12">
      <h2 className="mx-auto w-fit text-4xl">
        <AnimatedWord text={"Get in touch"} viewOnce={true} />
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

        {/* Contact form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              name="user_email"
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="w-full rounded border p-2 text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-violet-400 p-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-all duration-200 ease-in-out active:scale-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
