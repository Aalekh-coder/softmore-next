
"use client"

import FormDilog from "@/components/Layout/FormDilog";
import Button from "@/components/miniComp/button/Button";
import {
  CircleCheckBig,
  Facebook,
  Factory,
  Goal,
  Instagram,
  Monitor,
  Play,
  Search,
  ShoppingBasket,
  Volleyball,
  Youtube,
} from "lucide-react";
import React from "react";

const AdService = () => {
  const seoServiceCard2 = [
    {
      icons: <Search className={`bg-blue-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Paid Search Campaigns",
      describe:
        "Maximize your ROI with expertly managed paid search campaigns. We create targeted ads that drive high-quality traffic and deliver measurable results for your business.",
    },
    {
      icons: (
        <Instagram className={`bg-violet-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Social Media Campaigns",
      describe:
        "Engage your audience with creative and impactful social media campaigns. We help you build a strong online presence and foster meaningful connections with your customers.",
    },
    {
      icons: <Goal className={`bg-yellow-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Google Ads Management",
      describe:
        "Boost your visibility on Google with expertly managed ad campaigns. We optimize your ads to ensure maximum reach and conversions, driving growth for your business.",
    },
    {
      icons: <Factory className={`bg-rose-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Google Local Services Ads Management",
      describe:
        "Connect with local customers through Google Local Services Ads. We ensure your business stands out in local searches, driving more leads and appointments.",
    },
    {
      icons: (
        <Volleyball className={`bg-fuchsia-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Bing Ads Management",
      describe:
        "Expand your reach with Bing Ads. Our team creates and manages campaigns that target Bing users, helping you tap into a broader audience and drive conversions.",
    },
    {
      icons: <Youtube className={`bg-red-500 h-14 w-14 p-3 rounded-full`} />,
      title: "YouTube Advertising",
      describe:
        "Capture attention with engaging YouTube ads. We create video campaigns that resonate with your audience, increasing brand awareness and driving traffic to your site.",
    },
    {
      icons: <Monitor className={`bg-orange-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Display Ads Management",
      describe:
        "Reach your audience with visually appealing display ads. We design and manage campaigns that increase brand visibility and drive engagement across the web.",
    },
    {
      icons: (
        <ShoppingBasket className={`bg-lime-300 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Shopping Ads (Ecommerce) Management",
      describe:
        "Boost your eCommerce sales with optimized shopping ads. We manage your campaigns to ensure your products are seen by the right customers at the right time.",
    },
    {
      icons: <Facebook className={`bg-blue-300 h-14 w-14 p-3 rounded-full`} />,
      title: "Meta Ads (FacebookAds)",
      describe:
        "Boost your meta sales with optimized shopping ads. We manage your campaigns to ensure your products are seen by the right customers at the right time.",
    },
  ];
  return (
    <>
    
      <div className="flex flex-col md:flex-row-reverse md:px-8 md:py-10 lg:px-16">
        <div className="px-5 md:w-1/2">
          <img src="../ads/ads-Photoroom.png" alt="" />
        </div>

        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="py-2 px-6 text-2xl font-medium lg:text-5xl">
            Increase your customer with{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text font-bold">
              India's best Ads
            </span>{" "}
            Services Company.
          </h1>

          <p className="px-2.5 text-[15px] text-gray-800 lg:px-7 lg:py-6 lg:text-xl">
            Boost your business growth with India's leading Ads Services
            Company. At Softmore IT Solutions, we specialize in creating
            impactful advertising campaigns tailored to your unique business
            needs. Our expert team leverages cutting-edge platforms and
            strategies to maximize your reach, drive customer engagement.
          </p>

          {/* <button className=" border-blue-800 border-[4px] px-7 py-3 rounded-3xl my-5 lg:ml-9 hover:bg-violet-500 hover:text-white font-bold hover:border-white">
            Request A Free Quote
          </button> */}

          {/* <FormDilog> */}
            <Button text={"Request A Free Quote"} />
          {/* </FormDilog> */}
        </div>
      </div>

      <div className="mt-10">
        <p className="px-1 text-center my-8 text-2xl font-medium lg:text-5xl lg:px-[20rem] lg:mt-14">
          Our Creative{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold">
            Search Engine Optimization
          </span>{" "}
        </p>
        <p className="px-3 text-center text-gray-800 lg:px-32 lg:mb-10 lg:text-lg">
          Ready to generate more leads and maximize your revenue? At Softmore IT
          Solutions, we provide a comprehensive suite of award-winning digital
          marketing solutions tailored to elevate your business to new heights.
          Explore our full range of online marketing services designed for
          success.
        </p>

        <div className="md:flex md:flex-row-reverse md:items-start lg:px-20">
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {seoServiceCard2?.map((item, index) => {
              return (
                <SeoCard
                  icon={item?.icons}
                  text={item?.title}
                  describe={item?.describe}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:px-8 md:py-10 lg:px-16 border-t mt-10 relative ">
        <div className="absolute top-[100px] left-[67px] animate-pulse md:left-[450px] md:top-[150px] lg:left-[788px] lg:top-[250px] bg-white bg-opacity-55 h-10 w-10 flex items-center justify-center rounded-full lg:h-20 lg:w-20">
          <Play />
        </div>
        <div className="px-5 md:w-1/2 flex gap-2 mt-5 lg:pr-20">
          <img
            src="../ads/reel.jpg"
            className="rounded-xl h-[35vh] md:h-[35vh]  lg:h-[70vh]"
          />
          <img
            src="../ads/reel2.jpg"
            className="rounded-xl h-[40vh] mt-20 md:h-[35vh] lg:h-[70vh]"
          />
        </div>

        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="py-2 px-6 text-2xl font-medium lg:text-5xl">
            Boost Engagement with{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text font-bold">
              Reels & Social Media
            </span>{" "}
            Ads
          </h1>

          <p className="px-2.5 text-[15px] text-gray-800 lg:px-7 lg:py-6 lg:text-xl">
            Drive brand awareness and connect with your audience through
            captivating reels and targeted social media ads. Elevate your
            marketing strategy with impactful campaigns designed to deliver
            measurable results.
          </p>

          {/* <button className=" border-blue-800 border-[4px] px-7 py-3 rounded-3xl my-5 lg:ml-9 hover:bg-violet-500 hover:text-white font-bold hover:border-violet-300 hover:shadow-violet-500 hover:shadow-lg">
            Request A Free Quote
          </button> */}

          {/* <FormDilog> */}
            <Button text={"Request A Free Quote"} />
          {/* </FormDilog> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:px-8 md:py-10 lg:px-16">
        <div className="px-5 md:w-1/2">
          <img src="../ads/test-Photoroom.png" alt="Ads Preview" />
        </div>

        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="py-2 px-6 text-2xl font-medium lg:text-5xl">
            Increase your customer with{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text font-bold">
              India's best Ads
            </span>{" "}
            Services Company.
          </h1>

          <p className="px-2.5 text-[15px] text-gray-800 lg:px-7 lg:py-6 lg:text-xl">
            Boost your business growth with India's leading Ads Services
            Company. At
            <strong> Softmore IT Solutions</strong>, we specialize in creating
            impactful advertising campaigns tailored to your unique business
            needs. Our expert team leverages cutting-edge platforms and
            strategies to maximize your reach, drive customer engagement, and
            increase ROI.
          </p>

          <ul className="list-disc text-left px-7 text-gray-800 space-y-2 lg:text-lg">
            <li>
              <strong>PPC Advertising</strong> – Get instant traffic with
              optimized Google Ads.
            </li>
            <li>
              <strong>Social Media Ads</strong> – Run powerful Facebook,
              Instagram & LinkedIn campaigns.
            </li>
            <li>
              <strong>SEO & Google Ads</strong> – Rank higher and generate
              long-term organic traffic.
            </li>
            <li>
              <strong>Retargeting & Branding</strong> – Stay top-of-mind with
              smart remarketing strategies.
            </li>
          </ul>

          <p className="mt-4 px-7 text-sm lg:text-base flex gap-5 mb-5">
            <CircleCheckBig color="blue" /> Transparent Reports 
            <CircleCheckBig color="blue" /> Certified Experts 
            <CircleCheckBig color="blue" /> Scalable Campaigns
          </p>

          {/* <button className="border-blue-800 border-[4px] px-7 py-3 rounded-3xl my-5 lg:ml-9 hover:bg-violet-500 hover:text-white font-bold hover:border-white">
            Request A Free Quote
          </button> */}

          {/* <FormDilog> */}
            <Button text={"Request A Free Quote"} />
          {/* </FormDilog> */}
        </div>
      </div>
    </>
  );
};

const SeoCard = ({ icon, text, describe }) => {
  return (
    <div className="shadow-lg px-5 mx-5 my-5 py-5 border rounded-xl">
      <div className="flex items-center gap-5 font-medium text-xl">
        {icon}
        <h2>{text}</h2>
      </div>
      <p className="px-5 text-gray-500 text-[16px] mt-5">{describe}</p>
    </div>
  );
};

export default AdService;
