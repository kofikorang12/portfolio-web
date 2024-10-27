


import { motion } from "framer-motion"; // For hover animations
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaAws,
  FaDatabase,
  FaBootstrap,
  FaPython,
  // FaLinux,
  // FaApache,
} from "react-icons/fa";
// import {
//   SiFlask,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiBulma,
//   SiMaterialui,
// } from "react-icons/si";

const TechStack = () => {
  const stacks = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "GitHub", icon: FaGithub },
    { name: "Node.js", icon: FaNodeJs },
    { name: "React.js", icon: FaReact },
    { name: "AWS", icon: FaAws },
    { name: "MongoDB/MySQL", icon: FaDatabase },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Python", icon: FaPython },
    // { name: "Next.js", icon: SiNextdotjs },
    // { name: "Flask", icon: SiFlask },
    // { name: "Tailwind CSS", icon: SiTailwindcss },
    // { name: "Bulma CSS", icon: SiBulma },
    // { name: "Material UI", icon: SiMaterialui },
    // { name: "Linux", icon: FaLinux },
    // { name: "Apache", icon: FaApache },
  ];

  return (
    <section
      id="techstack"
      className="relative min-h-screen bg-gray-500 text-white py-16 overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>

        {/* Orbiting icons */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center tech-stack-orbit">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect
              transition={{ duration: 0.3 }}
            >
              <stack.icon className="text-5xl text-yellow-500 mb-4 orbit-icon" />
              <p className="text-lg font-semibold">{stack.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
