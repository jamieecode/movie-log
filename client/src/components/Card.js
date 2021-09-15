import React from "react";
import styled from "styled-components";

const MovieCard = styled.article`
  img {
    width: 20%;
  }
`;

const Card = ({ movie }) => {
  return (
    <MovieCard>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </MovieCard>
  );
};

export default Card;
