"use client"
import Button from "@/components/miniComp/button/Button";
import {
  BanknoteArrowUp,
  BowArrow,
  HandPlatter,
  Headset,
  MailSearch,
  MessagesSquare,
  MonitorDot,
  Podcast,
  Ribbon,
  ShoppingBag,
  Users,
} from "lucide-react";


const Seo = () => {
  const seoServiceCards = [
    {
      icons: <Headset className={`bg-blue-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Proven Results",
      describe:
        "Sucessfully executed digital marketing campaigns across various industries measurable result driving return on investment.",
    },
    {
      icons: (
        <HandPlatter className={`bg-emerald-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Experianced Team",
      describe:
        "Our passionate digital strategists, SEO expert, content wizard and eCommerce paid media expert are ready to unleash your brand's potential.",
    },
    {
      icons: (
        <MessagesSquare
          className={`bg-yellow-500 h-14 w-14 p-3 rounded-full`}
        />
      ),
      title: "Transparent Communication",
      describe:
        "We believe in open communication. You'll always know the why behind every action and see your progress in real-time with regular reporting",
    },
  ];

  const seoServiceCard2 = [
    {
      icons: (
        <ShoppingBag className={`bg-blue-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "eCommerce Marketing",
      describe:
        "Transform your online store into a revenue-generating powerhouse with a leading global eCommerce marketing agency. As experts in eCommerce paid media, we craft targeted strategies to boost traffic, increase conversions, and build lasting customer loyalty.",
    },
    {
      icons: (
        <Podcast className={`bg-emerald-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Social Media Marketing",
      describe:
        "Create communities, start conversations, and build your unique brand voice leveraging our social media marketing services. We navigate the ever-evolving social landscape, ensuring your message reaches the right ears and ignites conversations that turn into conversions.",
    },
    {
      icons: (
        <BowArrow className={`bg-yellow-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "SEO Services",
      describe:
        "Boost your visibility on Google search results with our top-notch Search Engine Optimization Services. We create a result-driven SEO strategy utilizing a blend of cutting-edge tools and proven SEO practices to propel your website to the top of the SERPs.",
    },
    {
      icons: (
        <MonitorDot className={`bg-rose-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Content Marketing",
      describe:
        "Captivate your audience with stories that resonate. We craft compelling content across channels, from blog posts and articles to captivating videos and infographics, attracting the right people and building brand identity.",
    },
    {
      icons: (
        <BanknoteArrowUp
          className={`bg-fuchsia-500 h-14 w-14 p-3 rounded-full`}
        />
      ),
      title: "Pay Per Click Advertising",
      describe:
        "Target your ideal audience on various platforms with impactful PPC campaigns, turning clicks into conversions. From Google Ads to social media campaigns, we're your strategic partner. We don't just write compelling copy and design stunning visuals, we handle every aspect of your campaigns.",
    },
    {
      icons: (
        <MailSearch className={`bg-slate-500 h-14 w-14 p-3 rounded-full`} />
      ),
      title: "Email Marketing",
      describe:
        "Nurture relationships, drive engagement, and turn subscribers into loyal customers. Our creative email campaigns keep your brand top-of-mind, leading to more opens, clicks, and purchases.",
    },
    {
      icons: <Users className={`bg-orange-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Lead Generation Services",
      describe:
        "Transform website visitors into valuable leads with our lead generation services. We implement proven strategies to attract, engage, and convert, building a robust pipeline of potential customers for your business.",
    },
    {
      icons: <Ribbon className={`bg-lime-500 h-14 w-14 p-3 rounded-full`} />,
      title: "Branding",
      describe:
        "Define your unique brand identity and leave a lasting impression on your customers. We help you craft a brand voice, visual identity, and messaging that resonates with your audience and sets you apart from the competition.",
    },
  ];
  return (
    <>
    
      {/* first  */}
      <div className="flex flex-col md:flex-row-reverse md:px-8 md:py-10 lg:px-16">
        <div className="px-5 md:w-1/2">
          <img src="../seo.png" alt="SeoImage" />
        </div>

        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-sm text-gray-900 px-2 my-5 lg:text-lg">
            {" "}
            Search Engine Optimization Started{" "}
            <span className="font-medium">$150</span> Per Month
          </h1>
          <p className="py-2 px-6 text-2xl font-medium lg:text-5xl">
            Skyrocket Your Sales with Best{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-bold">
              Search Engine Optimization
            </span>{" "}
            Services
          </p>

          <p className="px-2.5 text-[15px] text-gray-800 lg:px-7 lg:py-6 lg:text-xl">
            At Softmore IT Solutions, we provide comprehensive marketing
            strategies utilizing top platforms and services to help you achieve
            your objectives. Ready to excel in the digital world? Connect with
            our marketing experts today for a free consultation!
          </p>

          {/* <button className="font-medium border-gray-800 border-[4px] px-7 py-3 rounded-3xl my-5 lg:ml-9">
            Request A Free Quote
          </button> */}

          {/* <FormDilog> */}
            <Button text={"Request A Free Quote"} />
          {/* </FormDilog> */}
        </div>
      </div>

      {/* second  */}
      <div className="flex flex-col-reverse md:flex-row md:px-8 md:py-10 lg:px-16 lg:items-center">
        <div className="px-5 md:w-1/2 ">
          <img
            src="../seo2.jpg"
            className="lg:rounded-se-full rounded-t-full rounded-b-full"
          />
        </div>

        <div className="text-center md:w-1/2 lg:text-left">
          <p className="py-2 px-6 text-2xl font-medium lg:text-5xl">
            Get Customized Digital Strategies for Your{" "}
            <span className="text-transparent bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text font-bold">
              Unique Business Needs
            </span>{" "}
            Services
          </p>

          <p className="px-2.5 text-[15px] text-gray-800 lg:px-7 lg:py-6 lg:text-xl">
            At Softmore IT Solutions, Searching for a strategic partner to help
            you grow your business and realize its full potential? Get ready to
            leverage data-driven insights to transform your website into a lead
            generation machine. As a proactive digital marketing agency, we
            develop customized content and provide data-driven insights to
            strengthen your brand.
          </p>

          {/* <button className="font-medium border-white border-[4px] px-7 py-3 rounded-3xl my-5 lg:ml-9 bg-gradient-to-r from-rose-500 to-blue-500 text-white">
            Request A Free Quote
          </button> */}
          {/* <FormDilog> */}
            <Button text={"Request A Free Quote"} />
          {/* </FormDilog> */}
        </div>
      </div>

      {/* third div  */}

      <div>
        <p className="px-1 text-center my-8 text-2xl font-medium lg:text-5xl lg:px-[20rem] lg:mt-14">
          Why Choose Use{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold">
            As Your Search Engine Optimization
          </span>{" "}
          Company
        </p>
        <p className="px-3 text-center text-gray-800 lg:px-32 lg:mb-10 lg:text-lg">
          Struggling to stay ahead in the dynamic world of Search Engine
          Optimization? it's time to elevate your brand with a full service
          online marketing partner. Here why we're the perfect fit for your
          business growth.
        </p>

        <div className="md:flex md:items-start lg:px-20">
          <div className="md:w-1/2 mt-5">
            {seoServiceCards?.map((item, index) => {
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
          <div className="hidden md:block md:w-1/2 px-10 lg:relative">
            <img
              src="../dart.jpg"
              className=" rounded-full mt-8 lg:h-[300px] "
            />
            <img
              src="../teams.jpg"
              className=" rounded-full mt-8 lg:h-[300px] lg:absolute bottom-44 left-52 border-[10px] border-white "
            />
            <img
              src="../startup.jpg"
              className=" rounded-full mt-8 lg:h-[300px] lg:mt-20"
            />
          </div>
        </div>
      </div>

      {/* forth div  */}
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
          <div className="md:w-1/2 mt-5">
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

          <div className="hidden md:block md:w-1/2 px-10 lg:relative">
            <img
              src="../SeoPage/e-commerce.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:my-0 lg:border-white lg:border-[5px]"
            />
            <img
              src="../SeoPage/e-mail.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:my-0 lg:absolute lg:left-48 lg:top-52 lg:border-white lg:border-[5px]"
            />
            <img
              src="../SeoPage/group-of-people.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:border-white lg:border-[5px]"
            />

            {/* secons section  */}
            <img
              src="../SeoPage/money-3115981_1280.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:my-0 lg:border-white lg:border-[5px]"
            />
            <img
              src="../SeoPage/seo.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:my-0 absolute lg:left-52 lg:top-[1060px] lg:border-white lg:border-[5px]"
            />
            <img
              src="../SeoPage/social-media.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:my-32 lg:border-white lg:border-[5px]"
            />
            <img
              src="../SeoPage/stamp.jpg"
              className=" rounded-full mt-8 lg:h-[300px] md:my-32 lg:absolute lg:my-0 lg:left-52 lg:top-[1460px] lg:border-white lg:border-[5px]"
            />
          </div>
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

export default Seo;
