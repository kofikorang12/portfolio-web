import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="mb-8">
          Feel free to reach out to me on my social media or drop a message.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://facebook.com/kofikorang12"
            className="text-3xl hover:text-yellow-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/kofikorang12"
            className="text-3xl hover:text-yellow-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/kofikorang12"
            className="text-3xl hover:text-yellow-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/kofikorang12"
            className="text-3xl hover:text-yellow-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/jeffrey-baah"
            className="text-3xl hover:text-yellow-500"
          >
            <FaLinkedin />
          </a>
        </div>

        <form
          action="#"
          method="POST"
          className="bg-gray-800 p-6 rounded-lg max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
