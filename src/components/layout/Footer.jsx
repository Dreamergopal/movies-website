import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return <footer className="bg-black text-white px-6 py-10 shadow-inner shadow-red-900/30">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Company Info */}
    <div>
      <h2 className="text-2xl font-extrabold text-yellow-400 mb-3">Shree-Moves</h2>
      <p className="text-xl text-gray-400">
        Movies are not just a thing of entertainment, it's also a visual teacher.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-red-500">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-yellow-400 transition">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" className="hover:text-yellow-400 transition">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-red-500">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Privacy Policy
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Terms of Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-yellow-400 transition">
            Help Center
          </NavLink>
        </li>
        
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold mb-3 mx-4 text-red-500">Follow Us</h3>
      <div className="flex space-x-4 align-top items-center">
        <a
          href="https://www.linkedin.com/in/gopal-kumar-burman-824aa4277"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/dreamergopal"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="/twitter.png" alt="Twitter" className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/dreamergopal"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="/instagram.png" alt="Instagram" className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/Dreamergopal/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="/github.png" alt="GitHub" className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-red-900 mt-8 pt-4 text-sm text-center text-gray-500">
    © 2025 Shree-Moves. All rights reserved.
  </div>
</footer>
}

export default Footer;
