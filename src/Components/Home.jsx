import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <>
      <h1 className="text-4xl text-center font-bold text-white mb-2">
        Hello there,
        <br />
        welcome to my portfolio/personal website
        <br /> I'm David
      </h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-2">and I am a</h2>
      <h2 className="text-3xl font-semibold text-blue-400">{displayText}</h2>
      <p className="text-gray-400 mt-2">{roles[index].description}</p>
    </>
  );
}

function Home() {
  return (
    <>
      <section>
        <nav className="w-full bg-gray-900 text-white flex justify-between items-center">
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
