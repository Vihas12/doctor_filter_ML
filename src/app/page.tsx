"use client";
import { motion } from "framer-motion";
import type { NextPage } from "next";

const Home: NextPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-start p-8">
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2">
          Doctor Availability Finder
        </h1>
        <p className="text-gray-600 text-lg">
          Enter a time to find the most likely available doctors using AI.
        </p>
      </motion.header>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md mb-12"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          About This Project
        </h2>
        <p className="text-gray-700 mb-4">
          This project uses machine learning to analyze doctor availability and suggest the most likely doctors who are active and ready to attend a survey or consultation based on the selected time. It combines time-based filtering with real-time data processing.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🕒 Input your desired time using the time picker (coming soon!).</li>
          <li>🤖 The model filters and ranks doctors based on availability.</li>
          <li>📊 Powered by an ML model hosted on Hugging Face Spaces.</li>
        </ul>
      </motion.div>

      {/* ML Component Iframe */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-5xl"
      >
        <div className="bg-white p-4 rounded-2xl shadow-2xl">
          <iframe
            src="https://warl-doc.hf.space"
            className="w-full h-[800px] border-none rounded-2xl"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center text-gray-500 mt-12 text-sm"
      >
        &copy; 2025 Doctor Finder App. Powered by Hugging Face & AI
      </motion.footer>
    </div>
  );
};

export default Home;
