"use client";

import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-400 text-black text-center p-6 rounded-2xl shadow-lg w-full max-w-3xl"
      >
        <h1 className="text-4xl font-bold">Welcome to the Interactive Space</h1>
      </motion.header>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg mt-8 w-full max-w-4xl overflow-hidden"
      >
        <iframe
          src="https://warl-doc.hf.space"
          className="w-full h-[800px] border-none rounded-2xl"
          allowFullScreen
        ></iframe>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-gray-600 mt-8"
      >
        &copy; 2025 Interactive Platform, Powered by Hugging Face
      </motion.footer>
    </div>
  );
};

export default Home;