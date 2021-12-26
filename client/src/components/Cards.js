import { useState, useEffect, useRef } from "react";
import { BASE_URL, API_KEY } from "../api/api";
import Card from "../components/Card";
import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import useFetch from "../hooks/useFetch";
import SkeletonCard from "./skeletons/SkeletonCard";

const Container = styled.section`
  width: 88%;
  overflow: hidden;
  margin: 2em auto 0;
  position: relative;
  h2 {
    margin-left: 1em;
  }
`;

const CardSection = styled.section`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  color: #032541;
  &:hover {
    transition: all 0.4s ease-in-out;
    color: #01b4e4;
  }
  position: absolute;
  top: 40%;

  &: first-of-type {
    left: -5px;

    z-index: 6;
  }
  &: last-of-type {
    right: -40px;
    z-index: 6;
  }
`;

const Cards = ({ category }) => {
  const { data, error } = useFetch(
    `${BASE_URL}/${category}?api_key=${API_KEY}`
  );

  const TOTAL_SLIDES = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.4s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const categoryBar = (category) => {
    if (category === "popular") {
      return "Popular";
    } else if (category === "top_rated") {
      return "Top Rated";
    } else {
      return "Upcoming";
    }
  };

  if (error) console.log(error);

  return (
    <Container>
      <h2>{categoryBar(category)}</h2>
      <CardSection ref={slideRef}>
        {data?.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        {!data && [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n} />)}
      </CardSection>
      <Button onClick={prevSlide}>
        <RiArrowLeftSLine />
      </Button>
      <Button onClick={nextSlide}>
        <RiArrowRightSLine />
      </Button>
    </Container>
  );
};

export default Cards;
