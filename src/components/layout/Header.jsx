import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClassName = ({ isActive }) =>
    isActive
      ? `text-red-500 font-medium relative group transition-colors duration-300`
      : `text-gray-300 hover:text-red-500 font-medium relative group transition-colors duration-300`;

  return (
    <>
      <header className="bg-black text-white shadow-lg">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center border-b border-red-800 pb-3">
            <div>
              <p className="text-yellow-400 font-bold tracking-wider text-sm">
                #commerce-2-code
              </p>
            </div>
            <div>
              <a
              className="text-yellow-400 font-bold tracking-wider text-xl hover:text-blue-400"
              href= "https://gb-pokemon-card-details.netlify.app/"
              target="_blank"
              >
                Other Product
              </a>
            </div>
            <div className="flex space-x-6 items-center">
              <NavLink
                to="#"
                className="bg-gray-400 hover:bg-yellow-400 hover:text-black text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-300 shadow-md shadow-red-900/30"
              >
                Login
              </NavLink>
              <NavLink
                to="#"
                className="bg-red-500 hover:bg-yellow-400 hover:text-black text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-300 shadow-md shadow-red-900/30"
              >
                Sign up
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            <div className="mb-4 md:mb-0">
              <NavLink to="/" className="inline-block">
                <p className="text-3xl font-extrabold text-white relative hover:text-yellow-400">
                  Shree-Moves
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"></span>
                </p>
              </NavLink>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <NavLink to="/" className={navLinkClassName}>
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={navLinkClassName}>
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/movie" className={navLinkClassName}>
                    Movies
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className={navLinkClassName}>
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
