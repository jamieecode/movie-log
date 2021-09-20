import { useState } from "react";
import axios from "axios";
import { base_URL, API_KEY } from "../api/api";
import styled from "styled-components";

const StyleMovieDetail = styled.div`
  width: 80%;
  background-color: coral;
  display: flex;
  margin: 0 auto;
  img {
    width: 12rem;
  }

  p {
    width: 80%;
  }
`;

const MovieDetail = ({ location }) => {
  const [movie, setMovie] = useState([]);
  const id = location.pathname.split("/")[2];

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${base_URL}/${id}?api_key=${API_KEY}`);
      const result = response.data;
      setMovie(result);
    } catch (error) {
      console.log(error);
    }
  };
  fetchMovie();

  return (
    <StyleMovieDetail>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h3>{movie.id}</h3>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </StyleMovieDetail>
  );
};

export default MovieDetail;
