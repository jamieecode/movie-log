import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ value }) => {
  const getStar = (value) => {
    switch (value) {
      case 0:
        return <BsStar />;
      case 50:
        return <BsStarHalf />;
      case 100:
        return <BsStarFill />;
      default:
        break;
    }
  };
  const getStars = (value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for (let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = whole; i < (part ? 9 : 10); i++) stars.push(0);

    return stars;
  };
  return (
    <div>
      {getStars(value).map((value) => getStar(value))}
      <span>{value}</span>
    </div>
  );
};

export default Rating;
