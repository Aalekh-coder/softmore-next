"use client"
import Button from "@/components/miniComp/button/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react"; // Ensure React is imported

const Work = () => {
  const projects = [
    {
      img: "/project/ecom.png",
      projectName: "E-Commerce Platform",
      projectDescription:
        "A modern e-commerce website with seamless shopping experience, secure payments, and responsive design for all devices.",
    },
    {
      img: "/project/project1.png",
      projectName: "Personal Portfolio",
      projectDescription:
        "A visually engaging portfolio site to showcase creative work, featuring interactive galleries and smooth navigation. ",
    },
    {
      img: "/project/project2.png",
      projectName: "SaaS Dashboard",
      projectDescription:
        "A robust SaaS dashboard with real-time analytics, user management, and intuitive UI for business insights.",
    },
    {
      img: "/project/project3.png",
      projectName: "Restaurant Website",
      projectDescription:
        "A stylish restaurant website with online menu, reservation system, and customer reviews to boost engagement.",
    },
  ];

  return (
    <div className="px-2 py-10 lg:mt-16">
      <div className="flex flex-col items-start md:flex-row md:gap-5 md:px-5 lg:px-20 lg:gap-24">
        <div>
          <h2 className="font-semibold text-2xl my-2 bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text lg:text-4xl">
            Experience the Impact of Our Designs in Our Portfolio
          </h2>
          <p className="text-gray-700">
            Our specialists have worked across all industries, delivering
            engaging UI/UX designs. To learn more about our UI/UX design
            services and how we've helped businesses craft impactful user
            experiences, get in touch with us today.
          </p>

          <div className="mt-5">
            <Button text={"View Our Portfolio"} textColor={"text-black"} />
          </div>
        </div>
        <div>
          {/* This Project component likely displays a single, maybe highlighted project. */}
          {/* Ensure the 'img', 'projectName', 'projectDescription' props are passed correctly here,
              as className is the only prop currently used. Assuming it's pulling from 'projects' array
              or has a default. For now, added a generic alt tag to the img inside Project component itself.*/}
          <Project className={"hidden md:block"} />
        </div>
      </div>

      <motion.div
        initial={{
          y: -150,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="grid grid-cols-1 md:grid-cols-2 md:px-8 md:gap-5 lg:px-24 lg:gap-24"
      >
        {projects.map((proj, idx) => (
          <Project
            key={idx}
            img={proj.img}
            projectName={proj.projectName}
            projectDescription={proj.projectDescription}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Work;

const Project = ({ img, projectName, projectDescription, className }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        skewX: 2,
      }}
      transition={{
        duration: 0.4,
      }}
      className={cn(" rounded-xl overflow-hidden mx-1 my-4", className)}
    >
      <img
        src={img ? img : "../project/wanerlust3.jpg"}
        alt={projectName ? `Screenshot of ${projectName} website` : "Example website project screenshot"} // Enhanced alt tag
      />
      <div>
        <p className="font-medium my-1">
          {projectName ? projectName : "Project Title"} {/* Updated default for clarity */}
        </p>
        <p className="text-gray-500">
          {projectDescription
            ? projectDescription
            : "A compelling digital solution designed to meet specific business objectives and deliver outstanding user experiences."} {/* Updated default description */}
        </p>
      </div>
    </motion.div>
  );
};