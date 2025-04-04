import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skills from "../Components/Skills";

function Typewriter({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

function About() {
  const options = [
    {
      title: "Frontend Developer",
      description:
        "I   am a frontend developer with 3+ years of experience in JavaScript and its frameworks. I love building interactive and responsive web applications.",
    },
    {
      title: "Smart Contract Developer",
      description:
        "I   specialize in Solidity smart contracts, blockchain development, and Web3 integrations, ensuring secure and efficient decentralized applications.",
    },
    {
      title: "Media Broadcasting",
      description:
        "I   have  2+ years experience in media broadcasting, content creation, and digital storytelling, using technology to engage and inform audiences.",
    },
  ];

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
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
              <p className="text-gray-300">
                <Typewriter text={option.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
      <Skills />
      <footer className="bg-gray-900 text-white text-center p-2">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default About;
