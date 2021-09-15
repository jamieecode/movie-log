import { useState, useEffect } from "react";
import axios from "axios";
import { base_URL, API_KEY } from "../api/api";
import Card from "../components/Card";
import styled from "styled-components";

const CardSection = styled.section`
  display: flex;
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
  return (
    <>
      <h2>{category}</h2>
      <CardSection>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </CardSection>
    </>
  );
};

export default Cards;
