import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Experience = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 }); // Only triggers once when 20% of the section is in view

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="min-h-screen bg-gray-100 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-600">Barey Technology</p>
            <p className="text-gray-400 mb-4">Jan 2024 - Present</p>
            <p>
              • Collaborated with a cross-functional team to design and deploy
              versatile and intuitive software solutions, driving a 6% increase
              in customer loyalty.
              <br /> • Implemented a cutting-edge database migration strategy
              that increased database performance, while reducing operational
              maintenance costs by 25% <br /> • Developed custom software
              architectures, designs, and specifications to meet customer design
              requirements and exceed project deadlines
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">DevOps Engineer</h3>
            <p className="text-gray-600">Barey Technology</p>
            <p className="text-gray-400 mb-4">July 2024 - Present</p>
            <p>
              • Integrated Elastic Beanstalk with AWS CodePipeline and CodeBuild
              to automate the build, test, and deployment process, ensuring
              continuous delivery of high-quality software
              <br /> • Created and managed CloudFormation templates to ensure
              consistent and reproducible infrastructure deployments, enhancing
              the reliability and efficiency of our cloud environments.
              <br />• Research and recommended new technologies and tools to
              improve system performance and reliability, resulting in a 20%
              increase in system efficiency and a 15% reduction in system
              downtime.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              {" "}
              Freelance Frontend Engineer
            </h3>
            <p className="text-gray-600">Ondego Co. Ltd</p>
            <p className="text-gray-400 mb-4">sept 2024 - Present</p>
            <p>
              Worked on several projects focusing on UI/UX design and
              development using React, vite, HTML5, CSS3 and Tailwind css.
              Enhanced the company’s website platform leading to a 20% increase
              in user engagement.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">Biomedical Engineer</h3>
            <p className="text-gray-600">Kwahu Government Hospital</p>
            <p className="text-gray-400 mb-4">Oct 2021 - Jan 2023</p>
            <p>
              • Assist healthcare staff in the proper use and operation of
              medical equipment.
              <br /> • Develop and implement preventive maintenance schedules
              for medical equipment. <br />• Monitor the inventory of medical
              equipment, parts, and supplies
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
