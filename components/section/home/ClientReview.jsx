"use client"

import { Star } from "lucide-react";
import {motion} from "framer-motion"

const ClientReview = () => {
  const reviewCard = [
    {
      rating: 4.7,
      starRating: 5,
      reviewText:
        "Best quality services they are offering and cooperative and supportive staff.",
      reviewAuthor: "Soniya Singh",
      to: "https://maps.app.goo.gl/dM7SCUeWjZfqwth16",
    },
    {
      rating: 4.7,
      starRating: 5,
      reviewText:
        "It was a great experience to work with this company. I am completely satisfied with their services and support.",
      reviewAuthor: "JYOTI PUC",
      to: "https://www.google.com/maps/contrib/100401893236194210394/place/ChIJ4XTdjO9lUjoReMW5k-ClUq4/@20.42666,80.395133,5z/data=!4m6!1m5!8m4!1e1!2s100401893236194210394!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      rating: 4.7,
      starRating: 5,
      reviewText:
        "We chose it to develop our ecommerce website and we are very happy with the results. This is easily the Best web design company in Delhi. I highly recommend them.",
      reviewAuthor: "Duraipandi E",
      to: "https://maps.app.goo.gl/sJAkovxSHHgYS3HL9",
    },
    {
      rating: 4.7,
      starRating: 5,
      reviewText:
        "Working with this company was an excellent experience on a professional and personal level. The good part is that they are smart to understand our thought process at the initial stage itself and syncronize it in the best possible manner.",
      reviewAuthor: "N k rawat",
      to: "https://maps.app.goo.gl/VHjbrGvqS8tbCfKy5",
    },
    {
      rating: 4.5,
      starRating: 4,
      reviewText:
        "It is an outstanding team that I have had the pleasure of working with. They take the time to understand your specific needs and deliver a design based on that.",
      reviewAuthor: "LUKA MODRIC",
      to: "https://g.co/kgs/UJvCcMc",
    },
    {
      rating: 5.0,
      starRating: 5,
      reviewText:
        "Owner and staff are very creative and efficient. Excellent Delhi based design company. Based on my interactions with other businesses in this sector, this is the best one.",
      reviewAuthor: "pawan kumar",
      to: "https://maps.app.goo.gl/Crw1oh3vQVEx3VZz6",
    },
  ];

  return (
    <div className="my-10 overflow-hidden">
      <div>
        <h2 className="bg-gradient-to-r from-fuchsia-600 to-indigo-600  text-transparent bg-clip-text w-full block text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Client reviews
        </h2>
        {/* <div className="h-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600  mx-10 rounded-lg my-5 md:mx-40 lg:mx-[30rem]" /> */}
      </div>

      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-24 md:px-20">
        {reviewCard?.map((item, index) => (
          <ClientReviewCard
            key={index}
            rating={item?.rating}
            reviewText={item?.reviewText}
            reviewAuthor={item?.reviewAuthor}
            to={item?.to}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientReview;

const ClientReviewCard = ({ rating, reviewText, reviewAuthor, to }) => {
  return (
    <a href={to}>
      <motion.div
      initial={{
        opacity:0,
        x:50
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      whileHover={{
        scale:1.1
      }}
      transition={{
        duration:0.7
      }}
      className="border-none rounded-2xl px-5 py-5 hover:shadow-2xl shadow-lg mx-5 my-8">
        <div className="flex items-center gap-3">
          <div className="font-semibold text-gray-500">{rating}</div>
          <div className="flex items-center gap-1">
            {/* Render 5 stars */}
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="text-[#ffc400]" fill="#ffc400" />
            ))}
          </div>
        </div>

        <div className="text-gray-500 text-sm my-5">
          Quality: 5.0 | Schedule: 5.0 | Cost: 5.0 | Willing to refer: 5.0
        </div>
        <div className="text-sm text-gray-500 my-5">{reviewText}</div>

        <div className="text-gray-500 font-semibold">{reviewAuthor}</div>
      </motion.div>
    </a>
  );
};
