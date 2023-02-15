// Dependencies
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/sub-components/SocialLinks";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
