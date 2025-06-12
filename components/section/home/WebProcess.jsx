"use client"
import { CircleArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WebProcess = () => {
  const processCardItems = [
    {
      img: "../home/focus.png",
      title: "Clarity First",
      description:
        "We begin by understanding the “why” behind every task. Clear goals, defined outcomes, and aligned expectations form the foundation for everything that follows.",
      tagLine: "In this phase, we:",
      point: [
        "Identify your target audiences",
        "Analyze user pain-points & define your UVPs",
        "Define key performance indicators (KPIs)",
        "Create a roadmap to growing your brand online",
      ],
    },
    {
      img: "../home/plan.jpg",
      title: "Plan with Purpose",
      description:
        "We don’t overcomplicate — we strategize. Whether it’s a simple task or a complex project, we break things down into actionable steps with realistic timelines and responsibilities.",
      tagLine: "Here’s how our team does it:",
      point: [
        "We develop a base-level user flow & sitemap",
        "We utilize wireframing to create a seamless conversion funnel",
        "We add on-brand, consistent messaging to your structure",
      ],
    },
    {
      img: "../home/colllabe.png",
      title: "Collaborate, Don’t Complicate",
      description:
        "We believe in open communication and shared accountability. Our teams work closely across roles, staying connected and aligned without unnecessary friction.",
      tagLine:
        "With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
      point: [
        "Thoughtfully place design features to guide to the user journey",
        "Utilize interactive videos & animations",
        "Create custom, branded illustrations",
      ],
    },
    {
      img: "../home/execution.jpg",
      title: "Execute Relentlessly",
      description:
        "With clarity and a plan in place, we move fast and stay focused. We keep momentum high by removing roadblocks early, making quick decisions, and always iterating toward improvement.",
      tagLine: "To ensure your website reaches and satisfies every user, we:",
      point: [
        "Gather touchpoint & user-channel insights",
        "Transform your wireframes into a flexible UI",
        "Test across devices before approval & launch",
      ],
    },
    {
      img: "../home/refine.jpg",
      title: "Reflect and Refine",
      description:
        "Progress is a cycle. After each milestone or project, we take time to reflect — what worked, what didn’t, and how we can do it better next time.",
      tagLine: "Our design specialists make this happen by:",
      point: [
        "Following a strict protocol for every website launch",
        "Offering post-launch maintenance & optimization",
        "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
      ],
    },
  ];

  // huxn code
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="w-full" ref={targetRef}>
      <h1 className="font-bold text-3xl px-3 md:px-16 md:text-4xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-5xl lg:mb-10 lg:text-center">
        Our Approach to Getting Things Done
      </h1>
      <p className="px-3 text-sm font-semibold md:px-16 md:text-lg lg:text-center lg:px-32">
        At the heart of everything we do is a clear, purposeful approach to making progress — not just moving fast, but moving smart. Our process is designed to be flexible, collaborative, and results-driven. Here’s how we make things happen
      </p>
      <div  style={{x}} className="w-full overflow-x-scroll grid grid-flow-col lg:px-24">
        {processCardItems?.map((item, index) => (
          <ProcessCard
            key={index}
            img={item?.img}
            title={item?.title}
            description={item?.description}
            tagLine={item?.tagLine}
            points={item?.point}
          />
        ))}
      </div>
    </div>
  );
};

export default WebProcess;

const ProcessCard = ({ img, title, description, tagLine, points }) => {
  return (
    <div className="w-[90vw] mx-5 mt-8 md:px-5 md:mx-2 lg:w-[50vw] md:w-[55vw] lg:my-10">
      <img src={img} className="rounded-lg h-[35vh] lg:h-[40vh]" alt={title} />
      <p className="px-2 py-3 bg-gradient-to-r from-amber-400 to-rose-500 font-bold text-2xl bg-clip-text text-transparent md:w-[40vw] lg:text-3xl">
        {title}
      </p>
      <p className="px-2 font-semibold text-sm md:w-[40vw] lg:text-lg">{description}</p>
    </div>
  );
};
