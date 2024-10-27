import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe"; // Ensure all imports are correct
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Jeffrey Baah | Full Stack Developer & Cloud Practitioner</title>
        <meta
          name="description"
          content="I am Jeffrey Baah, a Full Stack Developer and AWS Cloud Practitioner. Explore my projects, experience, and get in touch to collaborate."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Cloud Practitioner, React Developer, AWS Developer, Portfolio Website"
        />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
