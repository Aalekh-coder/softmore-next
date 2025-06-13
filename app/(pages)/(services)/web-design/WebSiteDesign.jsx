'use client';

import { AccordionDemo } from "@/components/miniComp/According";
import {
  Boxes,
  BrickWall,
  Bug,
  Codepen,
  Codesandbox,
  Cpu,
  DraftingCompass,
  FlaskConical,
  FolderGit2,
  Lightbulb,
  MonitorCog,
  PenTool,
  ShieldAlert,
  Users,
} from "lucide-react";
import Button from "@/components/miniComp/button/Button";
import FormDilog from "@/components/Layout/FormDilog";
import Form from "@/components/Form";

const WebSiteDesign = () => {
  const cardUI = [
    {
      icon: <BrickWall size="34" />,
      text: "Content Strategy",
      color: "bg-red-500",
    },
    {
      icon: <Users size="34" />,
      text: "User Experience",
      color: "bg-orange-500",
    },
    {
      icon: <PenTool size="34" />,
      text: "Interface Deign",
      color: "bg-rose-500",
    },
    {
      icon: <ShieldAlert size="34" />,
      text: "Information Architecture",
      color: "bg-pink-500",
    },
    {
      icon: <Boxes size="34" />,
      text: "Wireframing",
      color: "bg-fuchsia-500",
    },
    {
      icon: <Codesandbox size="34" />,
      text: "Wireframing",
      color: "bg-cyan-500",
    },
    {
      icon: <Cpu size="34" />,
      text: "Prototyping",
      color: "bg-violet-500",
    },
    {
      icon: <MonitorCog size="34" />,
      text: "Visiual Design",
      color: "bg-lime-500",
    },
  ];

  const serverCard = [
    {
      icon: <FolderGit2 size={60} />,
      title: "Project Setup",
      describe:
        "We get to know the overall idea of the project with your expectations, target audience, and purpose of the product or service.",
      color: "text-red-500",
    },
    {
      icon: <Lightbulb size={60} />,
      title: "Research and Concept",
      describe:
        "Our designing experts research to define the use cases of the design and prepare a strategy wholly based on your project.",
      color: "text-blue-500",
    },
    {
      icon: <Codepen size={60} />,
      title: "Wireframing",
      describe:
        "We get to know the overall idea of the project with your expectations, target audience, and purpose of the product or service.",
      color: "text-green-500",
    },
    {
      icon: <FlaskConical size={60} />,
      title: "Testing And Validation",
      describe:
        "We get to know the overall idea of the project with your expectations, target audience, and purpose of the product or service.",
      color: "text-yellow-500",
    },
    {
      icon: <DraftingCompass size={60} />,
      title: "Visual Design",
      describe:
        "We get to know the overall idea of the project with your expectations, target audience, and purpose of the product or service.",
      color: "text-purple-500",
    },
    {
      icon: <Bug size={60} />,
      title: "Development Handover",
      describe:
        "We get to know the overall idea of the project with your expectations, target audience, and purpose of the product or service.",
      color: "text-pink-500",
    },
  ];

  return (
    <div className="text-center">

    
      {/* first section  */}
      <div>
        <h1 className="font-medium  text-zinc-800 text-4xl md:text-4xl lg:mt-10 lg:text-5xl  mt-14 ">
          Elevate Your <span>Platform with</span>
        </h1>

        <div className="font-extrabold px-[4px] mt-3 bg-gradient-to-r from-fuchsia-500 to-indigo-700 text-transparent bg-clip-text text-xl md:text-2xl lg:text-3xl  ">
          UI/UX Design Services Company
        </div>
        <p className="text-sm font-normal text-gray-700 px-3 my-5 md:px-14 md:text-lg lg:px-24 lg:text-xl">
          Design interactive experiences that bridge the gap between business
          objectives and user expectations. Partner with the best UI/UX design
          company to elevate your brand, enhance user engagement, and deliver
          design solutions that drive impactful conversions.
        </p>
        
        <Form />
        <div className="lg:-mt-24 lg:px-32">
          <img src="../servicePage.png" alt="" />
        </div>
      </div>

      {/* second section  */}

      <div className="lg:flex ">
        <div className="lg:w-1/2">
          <div className="font-medium text-xl md:text-2xl lg:text-3xl ">
            <div className="pb-2 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent font-bold text-2xl  md:text-3xl lg:text-5xl lg:my-2">
              Designing UI/UX That
            </div>{" "}
            Helps You Become Brand
          </div>

          <p className="text-sm text-gray-700 px-2 my-5 md:text-lg md:px-14">
            Partner with the leading UI/UX design company to create an interface
            tailored to your business needs and boost user engagement. Our UI/UX
            solutions are optimized for all devices, including mobile phones,
            desktops, and tablets
          </p>
          <p className="text-sm text-gray-700 px-2 my-5 md:px-14 md:text-lg">
            We help you create flawless wireframes and innovative designs for
            digital interfaces that not only captivate users visually but also
            align with your business objectives.
          </p>

          <Form />
        </div>
        <div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-rows-2 md:px-20 mt-10">
            {cardUI.map((item, index) => (
              <div
                key={index}
                className={`shadow-lg rounded-xl ${item?.color} px-10 py-5 text-white mx-2 my-5`}
              >
                <div className="flex items-center gap-1">
                  <div className="">{item?.icon}</div>
                  <div className="font-bold text-base">{item?.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* card  */}

      <div>
        <div className="bg-gradient-to-r from-rose-500 md:mt-10 md:mx-20 md:text-3xl to-indigo-400 font-medium rounded-lg mx-5 p-5 text-white lg:mx-[20vw] lg:mt-20 lg:text-4xl lg:py-10">
          Maximum efficiency, result oriented{" "}
          <span className="font-bold">approach and satisfied</span> customers is
          what we aim at
          <div className="flex items-center justify-between flex-wrap gap-3 mt-5 lg:px-28">
            <div className="bg-white md:px-24 md:py-7 bg-opacity-30 rounded-xl px-9 py-5">
              <div className="font-bold text-xl md:text-5xl">05+</div>
              <div>Years</div>
            </div>

            <div className="bg-white bg-opacity-30 md:px-[70px] md:py-8 rounded-xl px-8 py-5">
              <div className="font-bold text-xl md:text-5xl">140+</div>
              <div>Client</div>
            </div>
            <div className="bg-white md:px-20 md:py-7  bg-opacity-30 rounded-xl px-7 py-5">
              <div className="font-bold text-xl  md:text-5xl">750+</div>
              <div>Projects</div>
            </div>
            <div className="bg-white md:px-14 md:py-7  bg-opacity-30 rounded-xl px-3 py-5 lg:px-10">
              <div className="font-bold text-xl  md:text-5xl">1000+</div>
              <div>Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* our componara  */}

      <div className="mt-14 text-2xl px-3 font-bold md:text-3xl lg:text-5xl">
        {" "}
        Our{" "}
        <span className="bg-gradient-to-r from-rose-600 to-pink-400 text-transparent bg-clip-text">
          Comprehensive Range
        </span>{" "}
        of Design Services
      </div>

      <div className="lg:flex lg:items-center lg:px-14">
        <div className="px-5 mt-10 mb-4 md:px-10 lg:w-1/2">
          <img src="../servicesPagesdesign.png" alt="" />
        </div>
        <div className="lg:w-1/2">
          <AccordionDemo />
        </div>
      </div>
      {/* Get Design service in easy  */}

      <div className="px-2 mt-10 lg:mt-14">
        <p className="text-2xl font-medium px-1 md:text-3xl">
          Get{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text font-bold">
            Design Services
          </span>{" "}
          in Easy Steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-10 lg:grid-cols-3 lg:px-14">
          {serverCard.map((item, index) => (
            <ServicesCards
              key={index + 1}
              icon={item?.icon}
              title={item?.title}
              describe={item?.describe}
              index={index}
              color={item?.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesCards = ({ icon, title, describe, index, color }) => {
  return (
    <div className="shadow-lg  text-left px-5 mx-5 py-5 border mt-3 rounded-2xl ">
      <div
        className={`${color} mb-5 flex items-center justify-between font-bold text-5xl`}
      >
        {icon}
        <span className="opacity-50">0{index}</span>
      </div>
      <p className="text-lg font-medium text-zinc-800">{title}</p>
      <p className="py-4 px-1 text-gray-800">{describe}</p>
    </div>
  );
};

export default WebSiteDesign;