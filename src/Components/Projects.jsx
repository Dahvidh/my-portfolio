import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const allProjects = {
    frontend: [
      {
        title: "Dahvidh's Portfolio",
        description: "My personal portfolio site",
        link: "https://dahvidh.vercel.app/",
      },

      {
        title: "Web3globalconference",
        description: "A web3 company's event website",
        link: "https://web3globalconference.com/",
      },

      {
        title: "Bitbox",
        description: "A church app",
        link: "https://bitbox-ten.vercel.app/",
      },
      {
        title: "E-commerce UI",
        description: "An e-commerce frontend for my mom's business",
        link: "#",
      },

      {
        title: "Coffee World",
        description:
          "Similar to jumia, its a coffee marketplace where farmers all over africa can sell their cocoa.",
        link: "#",
      },

      {
        title: "Snake game",
        description:
          "A replica of the good ol'days Nokia phone game built with HTML, CSS and JS",
        link: "https://dahvidh-snake-game.vercel.app",
      },

      {
        title: "Regalium",
        description: "A Game-fi token Website, COMING SOON!!!",

        link: "#",
      },

      {
        title: "Matrix Screen",
        description:
          "Was bored here and decided to play around with javascript here",
        link: "https://dahvidh-matrix-ui.vercel.app",
      },

      {
        title: "React Calculator",
        description:
          "One of the Assignments from Meta when i was learning Reactjs",
        link: "#",
      },

      {
        title: "QR-Code Generator",
        description: "A qrcode generator (permanent)",
        link: "https://qrcode-generator-gamma-one.vercel.app",
      },

      {
        title: "Yomcoin",
        description: "a Defi app landing page",
        link: "https://www.yomcoin.com/",
      },

      {
        title: "Yompay",
        description: "a Fintech website",
        link: "https://www.yompay.com.ng/",
      },
    ],
    media: [
      {
        title: "Web3 Global Conference African Edition 2024",
        description: "A Web3 Event",
        link: "#",
      },
      {
        title: "NFT Metaverse 2024",
        description: "A web3 Event",
        link: "#",
      },
      {
        title: "FBMMC IKATE",
        description: "A concurrent session of church events",
        link: "#",
      },

      {
        title: "U19 Men's Cricket World Cup; African Qualifiers 2025",
        description:
          "A cricket tournament hosted by the nigerian cricket Federation (NCF) in support of the International Cricket Council (ICC) at Tafewa Balewa Cricket Oval, Lagos State, Nigeria.",
        link: "#",
      },
    ],
    smartContract: [
      {
        title: "NFT Marketplace",
        description: "A blockchain-based NFT site",
        link: "#",
      },
      {
        title: "Token Staking DApp",
        description: "A staking platform on Ethereum",
        link: "#",
      },
    ],
  };

  const [category, setCategory] = useState("frontend");

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

      <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Stuffs i've done so far
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCategory("frontend")}
            className={`px-4 py-2 rounded-lg ${
              category === "frontend" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            Frontend Dev
          </button>
          <button
            onClick={() => setCategory("media")}
            className={`px-4 py-2 rounded-lg ${
              category === "media" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            Media Broadcasting
          </button>
          <button
            onClick={() => setCategory("smartContract")}
            className={`px-4 py-2 rounded-lg ${
              category === "smartContract" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            Smart Contract Dev
          </button>
          <br />
        </div>
        <p className="font-bold text-center mb-8">
          right here are projects i worked on / participated in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {allProjects[category].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white text-center p-2">
        <p>&copy; {new Date().getFullYear()} DahVidh. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Projects;
