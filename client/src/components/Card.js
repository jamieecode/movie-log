import styled from "styled-components";

const MovieCard = styled.article`
  margin: 1em;
  img {
    width: 15rem;
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
    </MovieCard>
  );
};

export default Card;
