import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section>
        <nav className="w-full bg-gray-900 text-white p-2 flex justify-between items-center">
          <span className="text-lg font-bold">DahVidh</span>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
            <Link to="/coffee">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
                Buy me a coffee/drink
              </button>
            </Link>
          </div>
        </nav>
      </section>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg">
          Let's discuss more about what you want over a cup of coffee or two☕.
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 text-3xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <footer className="bg-gray-900 text-white text-center p-2">
        <p>&copy; {new Date().getFullYear()} DahVidh. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
