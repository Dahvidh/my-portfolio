import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const roles = [
  {
    title: "Javascript Frontend Developer",
    description:
      "Crafting seamless user experiences in a very short time using on-demand/popular JS frameworks.",
  },
  {
    title: "Media Broadcaster",
    description: "Bringing stories to life with engaging content.",
  },
  {
    title: "Smart Contract Developer (Solidity)",
    description: "Building secure and efficient blockchain solutions.",
  },
];

function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];
    const currentText = isDeleting
      ? currentRole.title.substring(0, charIndex - 1)
      : currentRole.title.substring(0, charIndex + 1);

    setDisplayText(currentText);

    if (!isDeleting && currentText === currentRole.title) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    } else {
      setTimeout(
        () => setCharIndex((prev) => prev + (isDeleting ? -1 : 1)),
        100
      );
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-white mb-2">
        Hello there,
        <br />
        welcome to my portfolio/personal website
        <br /> I'm David
      </h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-2">and I am a</h2>
      <h2 className="text-3xl font-semibold text-blue-400">{displayText}</h2>
      <p className="text-gray-400 mt-2 max-w-md">{roles[index].description}</p>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section>
        <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-4 py-3">
          <span className="text-lg font-bold">DahVidh</span>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
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

        {/* Sliding Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Side Menu */}
              <motion.div
                className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 p-6 space-y-4"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">DahVidh</span>
                  <button onClick={() => setMenuOpen(false)}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400"
                >
                  Contact
                </Link>
                <Link to="/coffee" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 text-left">
                    Buy me a coffee/drink
                  </button>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        <TypewriterEffect />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/projects">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">
              View My Work
            </button>
          </Link>
        </motion.div>
      </section>

      <footer className="bg-gray-900 text-white text-center p-2">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;
