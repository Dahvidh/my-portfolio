import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
  const allProjects = {
    frontend: [
      {
        title: "Dahvidh's Portfolio",
        description: "My personal portfolio site",
        link: "#",
      },

      {
        title: "Web3globalconference",
        description: "A web3 company's event website",
        link: "Web3globalconference.com",
      },

      {
        title: "Bitbox",
        description: "A church app",
        link: "#",
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
        link: "Web3globalconference.com",
      },

      {
        title: "Snake game",
        description:
          "A replica of the good ol'days Nokia phone game built with HTML, CSS and JS",
        link: "#",
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
        link: "#",
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
        link: "#",
      },

      {
        title: "Yomcoin",
        description: "a Fintech landing page",
        link: "#",
      },

      {
        title: "Yompay",
        description: "a Fintech website",
        link: "#",
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
