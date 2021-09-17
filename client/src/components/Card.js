import { useHistory } from "react-router";
import Rating from "./Rating";
import styled from "styled-components";

const MovieCard = styled.article`
  margin: 1em;
  img {
    width: 15rem;
    border-radius: 0.5em;
  }
`;

const Card = ({ movie }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  return (
    <MovieCard onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <Rating value={movie.vote_average} />
    </MovieCard>
  );
};

export default Card;
