
import {
  Activity,
  BanknoteArrowUp,
  Crosshair,
  Handshake,
  Icon,
  NotebookPen,
  Radar,
  TableOfContents,
} from "lucide-react";
import React from "react";

const SocialMediaManagemnt = () => {
  const socialMediaProcess = [
    {
      title: "Discovery & Goal Setting",
      description:
        "We begin by understanding your business, audience, and objectives. This helps us set clear, measurable goals for your social media presence, ensuring every action aligns with your brand vision and growth targets.",
      icon: <Crosshair className="lg:h-8 lg:w-8" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Strategy Development",
      description:
        "We craft a tailored social media strategy, selecting the right platforms, content themes, and posting schedules. Our approach ensures your brand voice is consistent and your message reaches the right audience at the right time.",
      icon: <TableOfContents className="lg:h-8 lg:w-8" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Content Creation",
      description:
        "Our creative team designs engaging visuals, videos, and copy that reflect your brand identity. We focus on producing high-quality, relevant content that sparks conversations and encourages audience interaction.",
      icon: <NotebookPen className="lg:h-8 lg:w-8" />,
      bgColor: "bg-cyan-500",
    },
    {
      title: "Scheduling & Publishing",
      description:
        "We plan and schedule your posts for optimal times using advanced tools. Consistent publishing keeps your audience engaged and ensures your brand stays top-of-mind across all chosen platforms.",
      icon: <BanknoteArrowUp className="lg:h-8 lg:w-8" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Community Engagement",
      description:
        "We actively monitor your profiles, respond to comments and messages, and foster genuine conversations. Building relationships with your audience increases loyalty and strengthens your brand reputation.",
      icon: <Handshake className="lg:h-8 lg:w-8" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Analytics & Optimization",
      description:
        "We track performance metrics like reach, engagement, and conversions. Regular analysis allows us to refine strategies, optimize content, and ensure your social media efforts deliver measurable results.",
      icon: <Radar className="lg:h-8 lg:w-8" />,
      bgColor: "bg-yellow-500",
    },
  ];

  const socialMediaPillars = [
    {
      title: "Content Creation",
      description:
        "Crafting engaging and relevant content is the foundation of social media marketing. High-quality visuals, videos, and copy tailored to your audience help build brand identity, spark conversations, and keep your followers interested. Consistent content creation ensures your brand stays top-of-mind and encourages users to interact and share your message.",
      icon: <NotebookPen className=" lg:h-10 lg:w-10" />,
      bgColor: "bg-rose-500",
    },
    {
      title: "Community Engagement",
      description:
        "Building relationships with your audience is key. Responding to comments, messages, and mentions shows you value your followers. Active engagement fosters loyalty, encourages word-of-mouth, and helps you better understand your customers’ needs, making your brand approachable and trustworthy in the digital space.",
      icon: <Handshake className=" lg:h-10 lg:w-10" />,
      bgColor: "bg-fuchsia-500",
    },
    {
      title: "Analytics & Insights",
      description:
        "Tracking performance through analytics helps you understand what works and what doesn’t. By monitoring metrics like reach, engagement, and conversions, you can refine your strategy, optimize content, and make data-driven decisions that lead to better results and a higher return on investment.",
      icon: <Radar className=" lg:h-10 lg:w-10" />,
      bgColor: "bg-teal-500",
    },
    {
      title: "Paid Advertising",
      description:
        "Paid campaigns amplify your reach and target specific audiences based on demographics, interests, and behaviors. Social media ads drive traffic, generate leads, and boost conversions. Strategic ad spending ensures your message reaches the right people at the right time, maximizing your marketing impact.",
      icon: <BanknoteArrowUp className=" lg:h-10 lg:w-10" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Strategy & Planning",
      description:
        "A clear social media strategy aligns your goals with your audience’s needs. Planning content calendars, setting objectives, and choosing the right platforms ensure your efforts are focused and effective. A strong strategy provides direction, consistency, and measurable growth for your brand online.",
      icon: <Crosshair className=" lg:h-10 lg:w-10" />,
      bgColor: "bg-lime-500",
    },
  ];

  const measurableImpact = [
    {
      heading: "Real Results, Visible Growth",
      description:
        "See the difference in your brand’s reach and engagement with our data-driven social media strategies. We focus on delivering measurable improvements you can track and celebrate.",
      bgColor: "bg-blue-500",
      icon: <Activity />,
    },
    {
      heading: "Transparent Performance Metrics",
      description:
        "Monitor your progress with clear analytics and regular reports. We provide insights into what’s working, so you always know how your campaigns are performing.",
      bgColor: "bg-purple-500",
      icon: <Activity />,
    },
    {
      heading: "ROI You Can Count On",
      description:
        "Our approach is designed to maximize your return on investment. From increased brand awareness to higher conversions, every campaign is optimized for tangible business outcomes.",
      bgColor: "bg-green-500",
    },
    {
      heading: "Continuous Improvement",
      description:
        "We don’t just set and forget. Our team constantly analyzes results and adapts strategies to ensure your social media presence keeps evolving and delivering better outcomes.",
      bgColor: "bg-pink-500",
    },
    {
      heading: "Actionable Insights",
      description:
        "Get more than just numbers—receive actionable recommendations that help you refine your marketing, connect with your audience, and drive real business growth.",
      bgColor: "bg-yellow-500",
    },
    {
      heading: "Custom Reporting",
      description:
        "Receive tailored reports that highlight the metrics that matter most to your business, making it easy to understand your progress and share results with your team.",
      bgColor: "bg-cyan-500",
    },
  ];

  return (
    <>
     
      <div className="flex flex-col md:flex-row md:items-start md:justify-between px-6 py-10 lg:px-28  text-black lg:mb-5 ">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            Grow Your Brand Presence with <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-3xl md:text-4xl">
              Social Media Management That Grows Your Brand
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900">
            At <strong>Softmore IT Solutions</strong>, we help businesses build
            a strong online identity. From content planning to community
            engagement — we manage your entire digital presence with strategy &
            creativity.
          </p>

          <button className="mt-4 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
            Request Free Strategy Call
          </button>
        </div>

        <div className=" mt-5 md:w-1/2 mb-6 md:mb-0">
          <img
            src="../smo/social-media-marketing-tips.jpg"
            alt="Social Media Management"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* section second  */}
      <div className="flex flex-col md:flex-row items-center md:justify-between px-6 py-10 lg:px-24  text-black ">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="../social1.webp"
            alt="Social Media Management"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-3xl md:text-4xl">
              Why Do You Need Social Media?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900">
            Social media stands out as one of the most effective platforms for
            boosting business growth and increasing brand recognition. Building
            a presence and networking on social channels is essential for any
            new business—90% of marketers report that even a few hours spent on
            social media can significantly enhance brand visibility.
          </p>
          <p className="text-lg md:text-xl text-gray-900">
            Beyond visibility, social media helps you truly understand your
            customers. By engaging with your audience and observing their posts
            and interests, you gain valuable insights into what they want and
            need. This knowledge allows you to share content that resonates,
            attract more visitors, and foster stronger relationships with your
            customers.
          </p>
        </div>
      </div>

      {/* third section  */}

      <div className="px-2 py-10 md:px-10">
        <p className="text-3xl text-center font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 text-transparent bg-clip-text lg:text-4xl mb-5">
          Core Elements of Social Media Success
        </p>
        {/* <div className="h-1 w-full md:px-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl md:h-2 md:w-[100px]md:mx-20"/> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
          {socialMediaPillars.map((item, index) => {
            return (
              <SeoCard
                icon={item?.icon}
                text={item?.title}
                describe={item?.description}
                key={index}
                bgColor={item?.bgColor}
              />
            );
          })}
        </div>
      </div>

      {/* fourth section  */}

      <div className="px-2 py-10 md:px-10">
        <p className="text-3xl text-center font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 text-transparent bg-clip-text lg:text-4xl mb-5">
          Process involved in social media management
        </p>
        {/* <div className="h-1 w-full md:px-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl md:h-2 md:w-[100px]md:mx-20"/> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
          {socialMediaProcess.map((item, index) => {
            return (
              <SeoCardProcess
                index={index + 1}
                icon={index + 1}
                text={item?.title}
                describe={item?.description}
                key={index}
                bgColor={item?.bgColor}
              />
            );
          })}
        </div>
      </div>

      {/* fifth section  */}
    </>
  );
};

export default SocialMediaManagemnt;

const SeoCard = ({ icon, text, describe, bgColor }) => {
  return (
    <div className="shadow-lg px-5 mx-5 my-5 py-5 border rounded-xl">
      <div className="flex items-center gap-5 font-medium text-xl ">
        <span className={`${bgColor} px-4 py-4 rounded-full text-white`}>
          {icon}
        </span>
        <h2 className={` lg:text-2xl`}>{text}</h2>
      </div>
      <p className={`px-5 text-[16px] mt-5 lg:text-lg font-medium`}>
        {describe}
      </p>
    </div>
  );
};

const SeoCardProcess = ({ icon, text, describe, bgColor, index }) => {
  return (
    <div className="shadow-lg px-5 mx-5 my-5 py-5 border rounded-xl">
      <div className="flex items-center gap-5 font-medium text-xl ">
       
        <h2
          className={` lg:text-2xl ${bgColor} px-5 text-white py-3 rounded-3xl`}
        >{`${index}. ${text}`}</h2>
      </div>
      <p className={`px-5 text-[16px] mt-5 lg:text-lg font-medium`}>
        {describe}
      </p>
    </div>
  );
};
const SeoCardFeature = ({ icon, text, describe, bgColor, index }) => {
  return (
    <div className="shadow-lg px-5 mx-5 my-5 py-5 border rounded-xl">
      <div className="flex items-center gap-5 font-medium text-xl ">
        {/* <span className={`${bgColor} px-6 py-4 rounded-full text-white text-3xl`}>{icon}</span> */}
        <h2 className={` lg:text-2xl  px-5  py-3 rounded-3xl`}>{icon}</h2>
      </div>
      <p className={`px-5 text-[16px] mt-5 lg:text-lg font-medium`}>
        {describe}
      </p>
    </div>
  );
};
