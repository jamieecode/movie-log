import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

const StarRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 0 0.5rem;
    font-weight: bold;
  }
`;

const getStar = (value, id) => {
  switch (value) {
    case 0:
      return <BsStar key={id} />;
    case 50:
      return <BsStarHalf key={id} />;
    case 100:
      return <BsStarFill key={id} />;
    default:
      break;
  }
};

const Rating = ({ value }) => {
  const getStars = (value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for (let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = whole; i < (part ? 9 : 10); i++) stars.push(0);

    return stars;
  };
  return (
    <StarRating>
      {getStars(value).map((value, id) => getStar(value, id))}
      <span>{value}</span>
    </StarRating>
  );
};

export default Rating;
