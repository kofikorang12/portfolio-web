import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold">Jeffrey Baah</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-2xl hover:text-yellow-500 cursor-pointer" />
          <FaTwitter className="text-2xl hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="text-2xl hover:text-yellow-500 cursor-pointer" />
          <FaGithub className="text-2xl hover:text-yellow-500 cursor-pointer" />
          <FaLinkedin className="text-2xl hover:text-yellow-500 cursor-pointer" />
        </div>
        <p className="mt-4">&copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
