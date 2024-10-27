import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-500">JB</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Toggle between hamburger and close icon */}
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 lg:static absolute top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent text-center lg:text-left space-y-4 lg:space-y-0 py-6 lg:py-0 transition-all duration-300`}
        >
          {[
            { to: "home", icon: <FaHome />, label: "Home" },
            { to: "AboutMe", icon: <FaUser />, label: "About Me" },
            { to: "experience", icon: <FaBriefcase />, label: "Experience" },
            { to: "projects", icon: <FaProjectDiagram />, label: "Projects" },
            { to: "techstack", icon: <FaTools />, label: "Tech Stack" },
            { to: "contact", icon: <FaEnvelope />, label: "Contact Me" },
          ].map(({ to, icon, label }) => (
            <li key={to} className="lg:inline-block">
              <Link
                to={to}
                smooth={true}
                duration={2000}
                className="flex justify-center lg:justify-start items-center space-x-2 hover:text-yellow-500 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close menu on item click (for mobile)
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
