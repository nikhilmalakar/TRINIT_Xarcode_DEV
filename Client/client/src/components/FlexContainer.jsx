import React from "react";
import { features } from "../constants";
const Card = ({ title, content, src }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 ">
    <div className="flex flex-col  items-center h-full justify-center bg-white rounded-xl shadow-lg p-6 ">
      <img src={src} width={60} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);
const FlexContainer = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {features.map((feature) => (
        <Card
          title={feature.title}
          content={feature.desc}
          src={feature.src}
          key={feature.id}
        />
      ))}
    </div>
  );
};

export default FlexContainer;
