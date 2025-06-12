import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, Heart, MessageSquareText } from "lucide-react";
import React from "react";

const Blog = () => {
  const blogData = [
    {
      img: "/blog/ao.webp",
      title: "The Future of AI in Everyday Life",
      decription:
        "Explore how artificial intelligence is transforming daily routines, from smart homes to personal assistants.",
      like: "12k",
      comment: "1.2k",
      view: "110k",
    },
    {
      img: "/blog/uiux.jpg",
      title: "Top UI/UX Design Trends for 2025",
      decription:
        "Stay ahead with the latest UI/UX trends that are shaping digital experiences this year.",
      like: "8.5k",
      comment: "900",
      view: "87k",
    },
    {
      img: "/blog/digital_marking.jpg",
      title: "Digital Marketing Strategies That Work",
      decription:
        "Discover proven digital marketing tactics to boost your brand’s online presence and engagement.",
      like: "15k",
      comment: "2.1k",
      view: "150k",
    },
    {
      img: "/blog/seo.webp",
      title: "SEO Basics: A Beginner’s Guide",
      decription:
        "Learn the fundamentals of SEO and how to optimize your website for better search rankings.",
      like: "9k",
      comment: "700",
      view: "65k",
    },
    {
      img: "/blog/startup.jpeg",
      title: "How Startups Can Scale Fast",
      decription:
        "Essential tips and strategies for startups looking to accelerate their growth in competitive markets.",
      like: "11k",
      comment: "1k",
      view: "98k",
    },
    {
      img: "/blog/socialmedia.png",
      title: "Mastering Social Media Engagement",
      decription:
        "Unlock the secrets to building a loyal audience and increasing engagement on social platforms.",
      like: "13k",
      comment: "1.5k",
      view: "120k",
    },
    {
      img: "/blog/aichatbot.jpg",
      title: "AI Chatbots: Revolutionizing Customer Service",
      decription:
        "See how AI-powered chatbots are enhancing customer support and streamlining business operations.",
      like: "10k",
      comment: "800",
      view: "75k",
    },
    {
      img: "/blog/Business-Branding-feature-Images.png",
      title: "Building a Memorable Brand Online",
      decription:
        "Tips for creating a strong brand identity that stands out in the digital world.",
      like: "7.5k",
      comment: "600",
      view: "60k",
    },
    {
      img: "/blog/webdev.png",
      title: "Web Development: Best Practices",
      decription:
        "A guide to modern web development practices for faster, more secure, and scalable websites.",
      like: "14k",
      comment: "1.8k",
      view: "130k",
    },
    {
      img: "/blog/contentmarking.jpg",
      title: "Content Marketing Essentials",
      decription:
        "Learn how to craft compelling content that attracts, engages, and converts your target audience.",
      like: "12.5k",
      comment: "1.1k",
      view: "105k",
    },
  ];
  return (
    <div className="px-2 py-5 md:px-14 lg:px-20">
      <h1 className="font-medium text-center text-2xl md:text-3xl">
        Welcome to Our <span className="text-blue-700">Blogs</span>
      </h1>
      <div className="relative ">
        <Input
          placeholder="Search blog..."
          className="my-5 px-5 h-[10vh] "
          type="text"
        />
        <Button className="absolute top-3 left-[210px] bg-blue-500 rounded-full md:left-[550px] lg:left-[1050px]">
          Search
        </Button>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <span className="bg-blue-600 px-4 py-2 rounded-full font-medium text-white">
          All Blog
        </span>
        <span className="bg-blue-600 px-4 py-2 rounded-full font-medium text-white">
          Al Chat Development
        </span>
        <span className="bg-blue-600 px-4 py-2 rounded-full font-medium text-white">
          AI Development
        </span>
        <span className="bg-blue-600 px-4 py-2 rounded-full font-medium text-white">
          AI Revolution
        </span>
        <span className="bg-blue-600 px-4 py-2 rounded-full font-medium text-white">
          Digital marketing
        </span>
      </div>

      <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:px-24">
        {blogData?.map((item, index) => (
          <BlogCard comment={item?.comment} decription={item?.decription} img={item?.img} like={item?.like} title={item?.title} view={item?.view} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Blog;

const BlogCard = ({ img, title, decription, like, comment, view }) => {
  return (
    <div>
      <Card className="my-10 overflow-hidden">
        <img src={img ? img : "../blog/digital_marking.jpg"} />
        <p className="px-5 font-medium text-xl">
          {title ? title : "Blog Title"}
        </p>
        <p className="px-5 my-3">
          {decription ? decription : "Lorem ipsum dolor sit, amet consect"}
        </p>

        <div className="flex items-center ">
          <div className="flex items-center gap-2 m-5">
            <Heart color="red" /> {like ? like : "20k"}
          </div>

          <div className="flex items-center gap-2 m-5">
            <MessageSquareText /> {comment ? comment : "2k"}
          </div>

          <div className="flex items-center gap-2 m-5">
            <Eye /> {view ? view : "232k"}
          </div>
        </div>
      </Card>
    </div>
  );
};
