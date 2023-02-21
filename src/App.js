// Dependencies
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/sub-components/Loader";

// Components
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const SocialLinks = lazy(() =>
  import("./components/sub-components/SocialLinks")
);

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <SocialLinks />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
