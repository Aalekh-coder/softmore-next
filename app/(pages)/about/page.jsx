"use client"
import {
  AppWindow,
  BookUser,
  Chrome,
  Code,
  Earth,
  Eclipse,
  Eye,
  Figma,
  Gauge,
  PictureInPicture2,
  Shell,
  TabletSmartphone,
  Telescope,
  Waypoints,
} from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import React from 'react'; // Ensure React is imported if not already


const About = () => {
  const work = [
    {
      icon: <AppWindow />,
      text: "Website Design & Development", // Corrected typo
      bgColor: "bg-teal-400",
      describe:
        "Clean code, user-focused design, and seamless performance — we create websites that not only look great but also work flawlessly.",
    },
    {
      icon: <Figma />,
      text: "UI/UX Design",
      bgColor: "bg-pink-400",
      describe:
        "Intuitive, modern, and engaging interfaces designed to enhance user experience and drive conversions.",
    },
    {
      icon: <TabletSmartphone />,
      text: "Software Development", // Corrected typo
      bgColor: "bg-blue-400",
      describe:
        "Clean code, user-focused design, and seamless performance — we create websites that not only look great but also work flawlessly.",
    },
    {
      icon: <BookUser />,
      text: "Lead Generation",
      bgColor: "bg-yellow-400",
      describe:
        "We develop strategies that attract quality leads and turn interest into action.",
    },
    {
      icon: <Telescope />,
      text: "Digital Marketing",
      bgColor: "bg-red-400",
      describe:
        "From SEO to social media and PPC campaigns — we help you reach, engage, and convert your audience",
    },
    {
      icon: <Earth />,
      text: "Branding & Strategy",
      bgColor: "bg-fuchsia-400",
      describe:
        "We help shape the voice and visual identity of your brand to ensure consistency and impact across all platforms.",
    },
  ];
  const workFeatures = [
    {
      icon: <PictureInPicture2 />,
      text: "Responsive Design",
      bgColor: "bg-red-400",
      describe:
        "Your site will look and perform perfectly on all devices — mobile, tablet, and desktop.",
    },
    {
      icon: <Gauge />,
      text: "Fast Loading Speed",
      bgColor: "bg-yellow-400",
      describe:
        "Optimized for performance, ensuring users stay engaged and bounce rates stay low.",
    },
    {
      icon: <Chrome />,
      text: "Modern & Custom Design",
      bgColor: "bg-orange-400",
      describe:
        "Unique, brand-aligned visuals that reflect your identity and resonate with your audience.",
    },
    {
      icon: <Eye />,
      text: "SEO-Ready Structure",
      bgColor: "bg-lime-400",
      describe:
        "Built with clean code and optimized for search engines to help you rank higher and get found faster.",
    },
    {
      icon: <Eclipse />,
      text: "Easy Content Management",
      bgColor: "bg-emerald-400",
      describe:
        "Update and manage your site easily with user-friendly content management systems (CMS) like WordPress.",
    },
    {
      icon: <Shell />,
      text: "Secure & Reliable",
      bgColor: "bg-cyan-400",
      describe:
        "SSL encryption, secure hosting, and regular backups to keep your site and data safe.",
    },
    {
      icon: <Waypoints />,
      text: "Integrated Contact & Lead Forms",
      bgColor: "bg-sky-400",
      describe:
        "Capture leads and inquiries directly through custom-built, easy-to-use forms.",
    },
    {
      icon: <Code />,
      text: "Analytics & Tracking",
      bgColor: "bg-rose-400",
      describe:
        "Integration with tools like Google Analytics so you can monitor performance and user behavior.",
    },
  ];
  const workFeaturesCard = [
    {
      icon: <PictureInPicture2 size="40" className="mx-auto" />,
      text: "High Performance",
      description:
        "We go beyond expectations to deliver results that speak for themselves. Our team is driven by performance and powered by passion.",
      bgColor: "hover:bg-red-200",
    },
    {
      icon: <AppWindow size="40" className="mx-auto" />,
      text: "Exceptional Team",
      description:
        "Our professionals blend creativity with technical expertise, bringing innovation and precision to every project we undertake.",
      bgColor: "hover:bg-blue-200",
    },
    {
      icon: <Chrome size="40" className="mx-auto" />,
      text: "Effective, Tailored Solutions",
      description:
        "No one-size-fits-all. We craft strategies and systems aligned with your business goals — for impact you can measure.",
      bgColor: "hover:bg-orange-200",
    },
    {
      icon: <Eye size="40" className="mx-auto" />,
      text: "Efficiency Without Compromise",
      description:
        "Time matters. Our streamlined workflows ensure rapid execution while maintaining top-tier quality.",
      bgColor: "hover:bg-lime-200",
    },
    {
      icon: <Eclipse size="40" className="mx-auto" />,
      text: "Cutting-Edge Technology",
      description:
        "We stay ahead of the curve, using the latest technologies and tools to build smart, future-ready solutions.",
      bgColor: "hover:bg-emerald-200",
    },
    {
      icon: <Shell size="40" className="mx-auto" />,
      text: "Built to Scale",
      description:
        "From startups to enterprise, our systems are scalable — growing with you as your business evolves.",
      bgColor: "hover:bg-cyan-200",
    },
    {
      icon: <Waypoints size="40" className="mx-auto" />,
      text: "Client-Centric Vision",
      description:
        "We listen, we understand, and we deliver. Your business needs guide every decision we make.",
      bgColor: "hover:bg-sky-200",
    },
    {
      icon: <Code size="40" className="mx-auto" />,
      text: "Reliable Support & Maintenance",
      description:
        "Our dedicated support team is always there — ensuring your systems run smoothly and your business never skips a beat.",
      bgColor: "hover:bg-rose-200",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="px-5 py-5 overflow-hidden">
      <motion.h1
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-center font-bold text-4xl text-purple-950 lg:text-7xl"
      >
        About Us
      </motion.h1>
      <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 h-[6px] rounded-lg my-3 w-full lg:w-[30rem] mx-auto " />

      <div className="mt-10 lg:flex lg:items-start lg:gap-14 lg:px-10">
        <div className="flex items-center gap-4 lg:w-1/2 lg:mt-20 ">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <img src="../about/boardwhitegirl.jpg" className="rounded-lg" alt="Team member working on a whiteboard" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <img src="../about/menChair.jpg" className="rounded-lg" alt="Man sitting in an office chair, focused on work" />
            </motion.div>
            <div>
              <img src="../about/officeMeet.jpg" className="rounded-lg" alt="Team members collaborating during an office meeting" />
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <p className="font-semibold text-xl my-6 lg:text-4xl">
            Creative Energy. Real Impact.
          </p>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-gray-800 font-medium my-5 lg:text-lg"
          >
            At{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text">
              Softmore IT Solutions{" "}
            </span>
            We’re not just here to work — we’re here to build, explore, and
            innovate. At Softmore, we’re a full-service web design, development,
            and digital marketing agency driven by creativity and powered by
            strategy. Our team of designers, developers, marketers, and thinkers
            is passionate about creating digital experiences that don't just
            look impressive — they deliver real results.
            <div className="my-5">
              <p>
                From eye-catching websites to high-converting marketing
                campaigns, we specialize in:
              </p>

              <ul className="ml-5 mt-5 list-disc divide-primary-foreground ">
                <li className="hover:underline">
                  Website Design & Development
                </li>
                <li className="hover:underline">SEO & Lead Generation</li>
                <li className="hover:underline">
                  Social Media & Paid Advertising
                </li>
                <li className="hover:underline">
                  Digital Strategy & Brand Building
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-gray-800 font-medium my-5 lg:text-lg"
          >
            We don’t believe in just clocking hours — we believe in doing
            meaningful work that inspires us and makes a difference for our
            clients. Every project is an opportunity to learn, grow, and push
            creative boundaries.{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text">
              Softmore IT Solutions
            </span>{" "}
            We're not just another agency. We're your digital partner — curious,
            committed, and constantly evolving to help your brand thrive online.
          </motion.div>
        </div>
      </div>

      {/* what we do */}
      <div className="my-5 ">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl lg:mt-10">
          What We Do ?
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl">
          At{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent ">
            Softmore IT Solution
          </span>{" "}
          we don’t just build websites — we craft digital experiences that
          elevate your business.
        </p>
        <p className="text-center font-sm my-5 text-gray-500 lg:text-xl lg:px-20">
          We specialize in coding, designing, and marketing solutions that help
          brands grow in the digital space. Whether you're a startup looking for
          a stunning online presence or an established business aiming to scale,
          our services are tailored to fit your vision and goals.
        </p>

        {/* what we do */}
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:ml-20">
          {work?.map((item, index) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  scrollMarginTop: 2, // This property is not typically used for scale animations.
                }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                }}
                key={index}
                className="flex items-center gap-2 my-3 px-5 py-5 border rounded-xl shadow-lg m-3"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`${item?.bgColor} p-3 rounded-full`}>
                  {item?.icon}
                </div>
                <div className="lg:flex lg:items-start lg:flex-col">
                  <p className="font-medium">{item?.text}</p>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3, ease: easeInOut }}
                    className="font-sm overflow-hidden text-gray-700"
                    style={{ margin: 0 }}
                  >
                    {item?.describe}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* what we do2 */}
      <div className="my-5 mt-10 border-t lg:mt-20">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl">
          Some Website Design Features
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl">
          Key Features That Make Your{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
            Website Stand Out
          </span>
          .
        </p>

        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl lg:px-28 ">
          Your website is often the first impression your brand makes — and we
          make sure it's unforgettable. At{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
            Softmore IT Solutions{" "} {/* Corrected typo: soultions -> Solutions */}
          </span>
          , we focus on features that combine functionality with aesthetic
          appeal to create a powerful online presence.
        </p>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 lg:ml-20">
          {workFeatures?.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: easeInOut }}
              key={index}
              className="flex flex-col items-center gap-2 my-3 px-5 py-5 m-3 border rounded-xl shadow-lg"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`${item?.bgColor} p-3 rounded-full`}>
                {item?.icon}
              </div>
              <p className="font-medium">{item?.text}</p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hoveredFeature === index
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3, ease: easeInOut }}
                className="text-gray-700 font-normal text-center overflow-hidden"
                style={{ margin: 0 }}
              >
                {item?.describe}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="my-5 mt-10 border-t">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl">
          Why Choose Softmore IT Solutions?
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl lg:px-28 ">
          Features That Set Us Apart{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
            Softmore IT Solutions{" "} {/* Corrected typo: soultions -> Solutions */}
          </span>
          we don’t just deliver services — we build partnerships based on trust,
          innovation, and results. Here’s what makes us a top choice for
          businesses looking to generate awareness, drive traffic, and connect
          with their audience
        </p>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 lg:ml-20">
          {workFeaturesCard?.map((item, index) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.05, // Reduced scale for better visual. Was 1.2, which is quite large.
                }}
                transition={{
                  duration: 0.4,
                }}
                key={index}
                className={`px-5 py-4 text-center mx-5 my-5 ${item?.bgColor} border rounded-lg shadow-lg`}
              >
                <div className="">{item?.icon}</div>
                <div className="text-xl font-medium">{item?.text}</div>
                <div>{item?.description}</div>
              </motion.div>
            );
          })}
        </div>

        <div>
          <p className="text-2xl text-center my-5 font-semibold lg:text-4xl">
            Let’s Build Something Better, Together
          </p>
          <p className="text-center font-medium my-5 text-gray-500 lg:text-xl lg:px-28 ">
            With{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
              Softmore IT Solutions{" "} {/* Corrected typo: soultions -> Solutions */}
            </span>
            you don’t just get a service — you get a team that’s as committed to
            your growth as you are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;