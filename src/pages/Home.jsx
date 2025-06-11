import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-red-400 font-semibold tracking-wider">
            Explore the latest movies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Unlimited Movies, TV Shows, Web-Series, <br />
            <span className="text-red-500">and Many More...</span>
          </h1>
          <p className="text-xl font-medium text-gray-300">
            Blockbusters, thrillers, and chill – <br />
            <strong className="text-white">all in one reel.</strong>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/movie"
              className="inline-block bg-red-600 hover:bg-red-700 transition duration-300 text-white font-bold py-3 px-6 rounded-lg"
            >
              🍿 Explore Now
            </NavLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/movies.png"
            alt="Movies Banner"
            className="w-full max-w-fit md:max-w-fit rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
