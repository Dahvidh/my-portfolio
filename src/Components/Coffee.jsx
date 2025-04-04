import React from "react";
import { Link } from "react-router-dom";

function BuyMeACoffee() {
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
        <h1 className="text-3xl font-bold mb-4">Support My Work</h1>
        <p className="text-lg mb-6 text-center max-w-lg">
          If you like my work, consider buying me a coffee! Your support helps
          me keep building awesome projects.
        </p>
        <a
          href="https://payeer.com/en/account/add/?curr=USD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold">
            Buy Me a Coffee ☕
          </button>
        </a>
      </div>

      <footer className="bg-gray-900 text-white text-center p-2">
        <p>&copy; {new Date().getFullYear()} DahVidh. All rights reserved.</p>
      </footer>
    </>
  );
}
export default BuyMeACoffee;
