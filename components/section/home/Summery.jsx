 "use client"

import { easeInOut, motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";

const Summery = () => {
  return (
    <div
      className="w-full px-2 overflow-hidden mt-10 pt-5 lg:mt-10 lg:border-b lg:pb-10"
      // style={{ fontFamily: "'Cal Sans', sans-serif" }}
    >
      <motion.h2 
        
      className="text-2xl md:text-3xl md:text-left lg:text-center lg:text-4xl px-1 text-center bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-5 font-bold">
        Design with Purpose, Code with Precision, Deliver with Pride
      </motion.h2>

      <div className="lg:flex lg:items-start lg:gap-4 lg:mt-3 lg:px-12">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="../home/hero-summar.png"
          className="mt-4 rounded-lg lg:w-1/2"
        />

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 lg:text-lg lg:px-5 mt-5"
        >
          Since 2019,{" "}
          <span className="text-blue-500 font-semibold">
            SOFTMORE IT Solutions Pvt Ltd
          </span>{" "}
          has been redefining digital excellence for ambitious businesses
          worldwide. We don’t just build websites or run campaigns—we engineer
          measurable growth through:
          <ul className="mt-5">
            <li className="">
              <div className="font-semibold">Websites That Convert </div>
              High-performance designs blending aesthetics with revenue-driving
              functionality
            </li>
            <li className="">
              <div className="font-semibold">
                Digital Marketing That Delivers{" "}
              </div>
              Data-powered strategies to dominate search rankings and social
              platforms
            </li>
            <li className="">
              <div className="font-semibold">Brand Identities That Inspire</div>
              Distinctive visual storytelling to make your mark unforgettable
            </li>
          </ul>
     
        </motion.div>
      </div>
    </div>
  );
};

export default Summery;

<motion.p
  className="font-extrabold text-4xl mt-6 md:text-5xl md:mt-9 lg:text-8xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  We Don’t Just Build Websites — We Build Sales Machines
</motion.p>;
