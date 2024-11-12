import { motion } from "framer-motion";
const HeroSection = () => {
  // Mouse movement effect for parallax background
  const handleMouseMove = (e) => {
    const layers = document.querySelectorAll(".parallax-layer");
    layers.forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax effect background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="parallax-layer bg-yellow-500 opacity-30 absolute w-96 h-96 rounded-full"
          data-speed="3"
          style={{ top: "15%", left: "15%" }}
        />
        <motion.div
          className="parallax-layer bg-pink-500 opacity-30 absolute w-72 h-72 rounded-full"
          data-speed="5"
          style={{ top: "70%", left: "60%" }}
        />
        <motion.div
          className="parallax-layer bg-red-700 opacity-40 absolute w-52 h-52 rounded-full"
          data-speed="5"
          style={{ top: "30%", right: "30%" }}
        />
        <motion.div
          className="parallax-layer bg-blue-500 opacity-30 absolute w-80 h-80 rounded-full"
          data-speed="7"
          style={{ top: "40%", left: "80%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-12">
        {/* Enlarged Profile Image */}
        <motion.img
          src="/images/profile.jpg"
          alt="Jeffrey Baah | Software Engineer | Frontend Developer | DevOps"
          className="w-56 h-56 lg:w-80 lg:h-80 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Name with hover effect */}
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          >
            <span className="block text-2xl font-handwriting text-yellow-400">
              I am
            </span>{" "}
            {/* Custom freehand font */}
            Jeffrey <span className="font-handwriting">Baah</span>
          </motion.h1>

          {/* Dynamic Titles */}
          <motion.h2
            className="text-3xl lg:text-4xl text-yellow-500 dynamic-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            A Full Stack Engineer <br /> and Cloud Practitioner
          </motion.h2>

          {/* Call to action button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-1000 ease-in-out"
            >
              View My Projects
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
