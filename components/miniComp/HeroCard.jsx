import React from "react";
import "./HeroCard.css"; // Import external CSS

const HeroCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 cards">
      {data?.map((item,index) => {
        return (
          <div className={`card ${item?.bgColor} px-4 py-5`} key={index}>
            <p className="font-bold mb-3">{item?.heading}</p>
            <p className="">
              {item?.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCard;
