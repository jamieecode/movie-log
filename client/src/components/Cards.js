import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../api/api";
import Card from "../components/Card";
import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Container = styled.section`
  width: 95%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  h1 {
    text-align: center;
  }
`;

const CardSection = styled.section`
  width: 95%;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  padding: 0.5em;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  color: navy;
  &:hover {
    transition: all 0.4s ease-in-out;
    color: #fff;
  }
  position: absolute;
  top: 50%;
  translate(-50%, -50%)
  background-color: transparent;
  &: first-of-type {
    left:0;
  }
  &: last-of-type {
    right:0;
  }
`;

const Cards = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${category}/?api_key=${API_KEY}`
        );
        setIsLoading(true);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
    return () => {
      setIsLoading(false);
    };
  }, [category]);

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
    if (category === "now_playing") {
      return "Now Playing";
    } else if (category === "popular") {
      return "Popular";
    } else {
      return "Top Rated";
    }
  };

  return (
    <Container>
      <h2>{categoryBar(category)}</h2>
      <CardSection ref={slideRef}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} isLoading={isLoading} />
        ))}
      </CardSection>
      <Button onClick={prevSlide}>
        <RiArrowLeftSLine />
      </Button>
      <Button>
        <RiArrowRightSLine onClick={nextSlide} />
      </Button>
    </Container>
  );
};

export default Cards;
