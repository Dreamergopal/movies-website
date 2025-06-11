import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🎥 Welcome to <span className="text-red-500">Shree-Moves</span>
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          In a world of endless stories,{" "}
          <strong className="text-white">Shree-Moves</strong> is your gateway to
          the ultimate cinematic experience. Whether you're chasing adrenaline
          through action-packed thrillers, falling in love with timeless
          romances, or laughing till it hurts with iconic comedies — we’ve got
          you covered.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Our platform is more than just a movie website — it’s a destination.
          Dive into a curated world of trending titles, hidden gems, and
          critically acclaimed masterpieces. From Hollywood blockbusters to
          indie brilliance, <strong className="text-white">Shree-Moves</strong>{" "}
          brings the silver screen magic right to your fingertips.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          With a smooth, fast, and modern interface, we make discovering your
          next favorite film effortless. Our platform is designed for
          binge-watchers, night owls, film critics, and weekend movie buffs
          alike. And the best part? New content drops every week — so the reel
          never stops rolling. 🍿
        </motion.p>

        {/* Highlight */}
        <motion.div
          className="bg-red-600 text-white text-xl md:text-2xl font-bold px-6 py-4 rounded-lg text-center shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Sit back, dim the lights, and let the story begin…
        </motion.div>

        {/* Ending line */}
        <motion.p
          className="text-center text-sm text-gray-500 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Powered by passion. Designed for dreamers. Built for the big screen in
          your heart ❤️
        </motion.p>
      </div>
    </section>
  );
}

export default About;
