import { useHistory } from "react-router";
import Rating from "./Rating";
import styled from "styled-components";

const MovieCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5em;
  padding: 0 0.8em;
  cursor: pointer;
  transition: 0.3s;
  img {
    width: 15rem;
    border-radius: 0.5em;
  }
  &: hover {
    transform: translate(0, -0.7rem);
  }
`;

const Card = ({ movie }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/movies/${movie.id}`);
  };

  return (
    <MovieCard onClick={handleClick}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
      </div>
      <Rating id={movie.id} value={movie.vote_average} />
    </MovieCard>
  );
};

export default Card;
