"use client"
import {
  Aperture,
  BanknoteArrowUp,
  ChartNoAxesCombined,
  CircleGauge,
  Crosshair,
  Earth,
  Feather,
  Gem,
  HandCoins,
  Hash,
  Instagram,
  Layers,
  LayoutTemplate,
  MessageSquareDiff,
  MonitorSmartphone,
  Radar,
  Rocket,
  Shredder,
  Star,
  TableOfContents,
  Tangent,
  TrainFront,
  Waypoints,
} from "lucide-react";
import React from "react";

const WebAbout = () => {
  const webCards = [
    {
      img: "../home/webdev.jpg",
      title: "Custom Website Design & Development",
      describe:
        "Custom Website Design & Development - We build digital storefronts that actually convert visitors into customers:",
      textColor: "text-[#5E6ECD]",
      points: [
        {
          icon: <MonitorSmartphone />,
          describe: [
            "Mobile-First Design",
            " Perfectly responsive on all devices",
          ],
          color: "bg-rose-500",
        },
        {
          icon: <Feather />,
          describe: [
            "Lightning Fast Speed",
            " Optimized to load in under 2 seconds",
          ],
          color: "bg-fuchsia-500",
        },
        {
          icon: <Earth />,
          describe: ["SEO-Ready Architecture", " Built to rank from day one"],
          color: "bg-pink-500",
        },
        {
          icon: <LayoutTemplate />,
          describe: [
            "Conversion Layouts",
            " Strategic placement for maximum leads",
          ],
          color: "bg-orange-500",
        },
        {
          icon: <Tangent />,
          describe: [
            "Easy to Management",
            " Update your site effortlessly",
          ],
          color: "bg-green-500",
        },
      ],
    },
    {
      img: "../home/Seo-images.png",
      title: "Dominate Search Results with Our SEO Powerhouse",
      describe:
        "We don't just improve rankings - we put your business in front of ready-to-buy customers. Our proven strategies.",
      textColor: "text-[#48d4ff]",
      points: [
        {
          icon: <Aperture className=""/>,
          describe: [
            "Technical SEO",
            " that makes Google love your site",
          ],
          color: "bg-red-500",
        },
        {
          icon: <TableOfContents className=""/>,
          describe: [
            "Content",
            " that answers exactly what your customers search for",
          ],
          color: "bg-amber-500",
        },
        {
          icon: <Earth className=""/>,
          describe: ["Local SEO", " to attract nearby buyers (perfect for stores/services)"],
          color: "bg-pink-500",
        },
        {
          icon: <LayoutTemplate className=""/>,
          describe: [
            "E-commerce SEO",
            " to boost product visibility and sales",
          ],
          color: "bg-emerald-500",
        },
        {
          icon: <Layers className=""/>,
          describe: [
            "Regular performance",
            " reports so you see the growth",
          ],
          color: "bg-blue-400",
        },
        {
          icon: <Star className=""/>,
          describe: [
            "Keywords",
            " reports so you see the growth",
          ],
          color: "bg-sky-400",
        },
      ],
    },
    {
      img: "../home/socialmediamanagement.webp",
      title: "Transform Your Social Media Into a Lead-Generating Machine",
      describe:
        "Social Media Optimization (SMO) & Management – We don’t just post content—we build communities that drive sales.",
      textColor: "text-[#45C2B4]",
      points: [
        {
          icon: <Instagram className=""/>,
          describe: [
            "Platform-Specific Strategies",
            " Perfectly responsive on all devices",
          ],
          color: "bg-rose-500",
        },
        {
          icon: <Rocket className=""/>,
          describe: [
            "Engagement-Boosting Posts",
            " Optimized to load in under 2 seconds",
          ],
          color: "bg-fuchsia-500",
        },
        {
          icon: <Hash className=""/>,
          describe: ["Hashtag & SEO Optimization", " Built to rank from day one"],
          color: "bg-pink-500",
        },
        {
          icon: <Shredder className=""/>,
          describe: [
            "Influencer & Collaboration Outreach",
            " Strategic placement for maximum leads",
          ],
          color: "bg-orange-500",
        },
        {
          icon: <BanknoteArrowUp className=""/>,
          describe: [
            "Paid Social Ad Campaigns",
            " Update your site effortlessly",
          ],
          color: "bg-lime-500",
        },
        {
          icon: <ChartNoAxesCombined className=""/>,
          describe: [
            "Analytics & Monthly Reports",
            " Update your site effortlessly",
          ],
          color: "bg-indigo-400",
        },
      ],
    },
    {
      img: "../home/facebook-ads-masterclass.png",
      title: "Turn Clicks Into Customers With Our Google Ads Mastery",
      describe:
        "We optimize every dollar to attract ready-to-buy customers",
      textColor: "text-[#a21eca]",
      points: [
        {
          icon: <Crosshair className=""/>,
          describe: [
            "Precision Targeting",
            " Perfectly responsive on all devices",
          ],
          color: "bg-rose-500",
        },
        {
          icon: <Waypoints className=""/>,
          describe: [
            "Conversion-Optimized Campaigns",
            " Optimized to load in under 2 seconds",
          ],
          color: "bg-fuchsia-500",
        },
        {
          icon: <HandCoins className=""/>,
          describe: ["Smart Budget Allocation", " Built to rank from day one"],
          color: "bg-pink-500",
        },
        {
          icon: <TrainFront className=""/>,
          describe: [
            "Transparent Performance Tracking",
            " Strategic placement for maximum leads",
          ],
          color: "bg-orange-500",
        },
      ],
    },
    {
      img: "../home/google.png",
      title: "Turn Your Google My Business Into a 24/7 Sales Rep",
      describe:
        "We don't just list your business – we make it the top choice for local customers",
      textColor: "text-[#385A64]",
      points: [
        {
          icon: <Gem className=""/>,
          describe: [
            "Complete Profile Optimization",
            " Perfectly responsive on all devices",
          ],
          color: "bg-emerald-500",
        },
        {
          icon: <MessageSquareDiff className=""/>,
          describe: [
            "Review & Reputation Management",
            " Optimized to load in under 2 seconds",
          ],
          color: "bg-cyan-500",
        },
        {
          icon: <Radar className=""/>,
          describe: ["Local SEO Dominance", " Built to rank from day one"],
          color: "bg-pink-500",
        },
        {
          icon: <CircleGauge className=""/>,
          describe: [
            "Performance Tracking",
            " Strategic placement for maximum leads",
          ],
          color: "bg-blue-500",
        }
      ],
    },
  ];

  return (
    <div className="px-3 lg:flex lg:px-14 lg:mt-14 ">
      {/* info tag */}
      <div className="lg:w-[40vw]">
        <p className="font-bold text-3xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-4xl lg:mb-7">
          Grow Your Business Online with Our Complete Digital Marketing Services
        </p>
        <p className="mt-2 lg:px-5">
          We handle everything your brand needs to succeed online—all in one
          place. Our expert team creates custom strategies to attract more
          customers, increase sales, and build your reputation. Here’s how we
          help
        </p>
      </div>

      <div className="lg:h-[90vh] overflow-y-scroll scroll-smooth hide-scrollbar lg:w-[60vw]">
        {webCards.map((item, index) => {
          return (
            <MiniCard
              textColor={item?.textColor}
              img={item?.img}
              title={item?.title}
              description={item?.describe}
              key={index}
              points={item?.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WebAbout;

const MiniCard = ({ img, title, description, textColor, points }) => {
  return (
    <div className="border-2 p-3 m-2 mt-10 rounded-xl md:px-8 py-8">
      <div>
        <img
          className="rounded-lg lg:h-[30vh]"
          src={
            img
              ? img
              : "https://img.freepik.com/free-vector/www-internet-globe-grid_78370-2008.jpg?t=st=1746442828~exp=1746446428~hmac=7c9fb0e71bb16d737c20a09a6e105943e72576b39552bb7f5ca8edbe0c93975f&w=740"
          }
          alt={title ? `${title} service illustration` : "Generic service illustration"} // Added alt tag based on title or a generic fallback
        />
      </div>
      <div className="px-3 py-2">
        <p className={`text-3xl my-2 font-bold ${textColor}`}> {/* Applied textColor here */}
          {title ? title : "Custom Web Design"}
        </p>
        <p className="font-medium text-lg ">
          {description
            ? description
            : "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brands visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-white ">
        {points?.map((tag, idx) => {
          return (
            <span className={`flex items-center px-2 py-4 rounded-xl gap-2 ${tag?.color}`} key={idx}> {/* Applied tag.color here */}
              {tag?.icon}
              <div>
                <p className="font-bold">{tag?.describe[0]}</p>
                {/* <p>{tag?.describe[1]}</p> */} {/* This line was commented out in original */}
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};