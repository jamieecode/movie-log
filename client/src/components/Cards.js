import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { base_URL, API_KEY } from "../api/api";
import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;

const CardSection = styled.section`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  border: 2px solid orange;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: orange;
    color: #fff;
  }
`;

const Cards = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${base_URL}/${category}/?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
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

  return (
    <Container>
      <h2>{category}</h2>
      {currentSlide}
      <CardSection ref={slideRef}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </CardSection>
      <Button onClick={prevSlide}>Prev</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
  );
};

export default Cards;
