import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useInView } from "framer-motion"; // Use framer-motion's hook for scroll visibility

const AboutMe = () => {
  const ref = React.useRef(null); // Reference to the section
  const inView = useInView(ref, { once: true, threshold: 0.2 }); // Trigger animation when 20% of the section is visible

  // Variants for the animation
  const containerVariant = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // How long the animation takes
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger the appearance of child elements
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="AboutMe"
      ref={ref} // Attach ref to this section
      className="relative min-h-screen bg-gray-800 text-white py-16 flex items-center justify-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
      variants={containerVariant} // Apply the container animation
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-pattern-animation opacity-20 z-0"></div>

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.h2 className="text-4xl font-bold mb-8" variants={childVariant}>
          About Me
        </motion.h2>
        <motion.p className="text-lg mb-6" variants={childVariant}>
          I am a passionate{" "}
          <span className="font-semibold">Software Engineer</span> with a strong
          focus on delivering high-quality, efficient, and scalable web
          applications. With a deep understanding of
          <span className="font-semibold"> frontend development</span>, I craft
          beautiful, responsive user interfaces using modern frameworks like{" "}
          <span className="font-semibold">React.js</span>.
        </motion.p>
        <motion.p className="text-lg mb-6" variants={childVariant}>
          As an{" "}
          <span className="font-semibold">
            AWS Cloud Practitioner Certified
          </span>{" "}
          professional, I specialize in leveraging cloud technologies to build
          and deploy scalable solutions. I ensure that the applications I
          develop are optimized for performance, security, and cost-efficiency
          in the cloud.
        </motion.p>
        <motion.p className="text-lg mb-6" variants={childVariant}>
          While my focus is on software development, my background in
          <span className="font-semibold"> Biomedical Engineering</span> has
          equipped me with problem-solving skills and a deep understanding of
          technology&apos;s impact on health and life sciences.
        </motion.p>
        <motion.p className="text-lg" variants={childVariant}>
          My diverse expertise allows me to integrate different technologies and
          work in a variety of environments, from web development to cloud-based
          architectures.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
