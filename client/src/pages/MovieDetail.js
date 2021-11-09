import { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${base_URL}/${id}?api_key=${API_KEY}`
        );
        const result = response.data;
        console.log(result);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <StyleMovieDetail>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path} `
            : ""
        }
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>

        <a href={movie.homepage}>{movie.homepage}</a>
      </div>
    </StyleMovieDetail>
  );
};

export default MovieDetail;
