import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaStripe,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for transitions

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A responsive portfolio website built with React, Tailwind CSS, and Framer Motion for smooth transitions and animations.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/kofikorang12/portfolio",
      liveDemo: "https://yourportfolio.com",
    },
    {
      name: "Gospel Light Mssion",
      description: "A responsive webiste for Gospel Light Mission Church",
      techStack: ["Node.js", "React", "Vite", "Tailwind CSS"],
      github: "https://github.com/kofikorang12/gospellightmission",
      liveDemo: "https://yourstore.com",
    },
    {
      name: "E-commerce Store",
      description:
        "An e-commerce platform with real-time product search, cart functionality, and payment integration using Stripe.",
      techStack: ["Node.js", "React", "MongoDB", "Stripe API"],
      github: "https://github.com/kofikorang12/ecommerce-store",
      liveDemo: "https://yourstore.com",
    },
    {
      name: "Netflix Clone",
      description:
        "A clone of the Netflix website featuring a movie database and user authentication.",
      techStack: ["Node.js", "React", "MongoDB", "Stripe API"],
      github: "https://github.com/Kofikorang12/netflix-clone",
      liveDemo: "https://yourstore.com",
    },
    {
      name: "AirBnB Clone",
      description:
        "A clone of the Netflix website featuring a movie database and user authentication.",
      techStack: ["Node.js", "React", "mySQL", "Flask"],
      github: "https://github.com/kofikorang12/Airbnb-clone",
      liveDemo: "https://yourstore.com",
    },
  ];

  // Variants for framer-motion animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Stagger each project card's appearance
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gray-900 text-white py-16"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <FaReact className="absolute text-blue-500 text-6xl top-10 left-10" />
        <FaNodeJs className="absolute text-green-500 text-6xl top-1/4 right-20" />
        <FaStripe className="absolute text-purple-500 text-6xl bottom-20 left-32" />
        <FaDatabase className="absolute text-yellow-500 text-6xl bottom-40 right-10" />
        <FaReact className="absolute text-blue-400 text-5xl top-40 left-60" />
        <FaNodeJs className="absolute text-green-400 text-5xl top-60 right-60" />
        <FaCss3Alt className="absolute text-blue-300 text-6xl top-1/2 left-1/4" />
        <FaJsSquare className="absolute text-yellow-400 text-6xl bottom-10 right-40" />
        <FaStripe className="absolute text-purple-400 text-5xl bottom-20 right-20" />
      </div>

      <div className="relative z-10 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative z-20"
              custom={index} // Pass the index to control the stagger delay
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation once when the project comes into view
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 py-1 px-3 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-yellow-500 hover:text-yellow-300"
                >
                  <FaGithub className="inline-block mr-2" /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="text-yellow-500 hover:text-yellow-300"
                >
                  <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
