import socialLinks from "../../helpers/socialLinks";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <div className="fixed top-0 right-0 mx-2 hidden h-full items-center justify-center sm:flex">
      <div className="flex flex-col gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6 * index,
              },
            }}
            whileHover={{
              scale: 1.4,
            }}
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="backdrop-blur-sm backdrop-filter"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-black-900">
              <social.icon size="1.5rem" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
