"use client"

import { motion } from "framer-motion";
import Form from "@/components/Form";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] flex items-center flex-col md:flex-row md:px-8 lg:h-[80vh] bg-gradient-to-r from-fuchsia-600 to-indigo-600 overflow-hidden lg:px-10 ">
      {/* Text Section */}
      <motion.div
        className="w-full text-white px-4 pt-4 lg:py-20 lg:px-10 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <p className="font-semibold lg:text-xl">Premium Web Design Agency</p>
        <motion.h1
          className="font-extrabold text-2xl mt-1 md:text-3xl md:mt-9 lg:text-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We Don’t Just Build Websites—We Build Sales Machines
        </motion.h1>
        <p className="text-sm lg:text-xl mt-2">
          We design high-performance sites proven to increase leads by 200%.
        </p>

        <motion.div
          className="mt-4 md:mt-10 lg:mt-14"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Form />
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 mt-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="../home/Web-Designs-1-Photoroom.png"
          className="max-w-[400px] md:max-w-[450px] lg:max-w-[700px] "
          alt="Modern web design concept showcasing a high-performance website on a computer screen for sales generation." // Enhanced alt tag
        />
      </motion.div>
    </div>
  );
};

export default Hero;