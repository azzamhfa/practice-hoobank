import React from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => (
  <div
    className="flex justify-between flex-col px-10
    py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <img src={quotes} alt="dqt" className="w-[42px] h-[27px] object-obtain" />
    <p className="font-poppins my-10 font-normal text-white text-[18px] leading-[32px]">
      {content}
    </p>

    <div className={`flex flex-row`}>
      <img src={img} alt={name} className={`w-[50px] h-[50px] rounded-full`} />
      <div className="flex flex-col ml-4">
        <h2 className="font-poppins font-semibold text-white">{name}</h2>
        <p className="text-dimWhite font-poppins font-normal">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
