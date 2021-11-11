import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../api/api";
import styled from "styled-components";

const StyleMovieDetailSection = styled.section`
  width: 80%;
  // background-color: coral;
  padding: 1em;
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  img {
    width: 15rem;
  }
  h2 {
    margin-top: 1em;
  }
`;

const StyledMovieDetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2em;
  }
`;

const StyledCreditInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
  //background-color: purple;
  grid-gap: 1em;
  article img {
    width: 100%;
  }
`;

const MovieDetail = ({ location }) => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/${id}?api_key=${API_KEY}&append_to_response=credits`
        );

        setMovie(data);
        console.log(data);
        setCredits(data.credits);
        //console.log(data.credits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <StyleMovieDetailSection>
      <StyledMovieDetailInfo>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path} `
              : ""
          }
          alt={movie.title}
        />
        <div>
          <h1>
            {movie.title}(
            {movie.release_date && movie.release_date.split("-")[0]})
          </h1>
          <h4>
            {movie.genres &&
              movie.genres.map((genre) => (
                <span key={genre.name}>{genre.name} </span>
              ))}
          </h4>
          <h4>{movie.runtime}m</h4>
          <p>{movie.overview}</p>

          <a href={movie.homepage}>{movie.homepage}</a>
        </div>
      </StyledMovieDetailInfo>
      <h2>Cast</h2>
      <StyledCreditInfo>
        {credits?.cast?.map((c) => (
          <article key={c.credit_id}>
            {
              <img
                src={
                  c.profile_path
                    ? `https://image.tmdb.org/t/p/original${c.profile_path}`
                    : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }
              />
            }
            <p>
              {c.name} as {c.character}
            </p>
          </article>
        ))}
      </StyledCreditInfo>
      <hr />
      <h2>Crews</h2>
      <StyledCreditInfo>
        {credits?.crew?.map((c) => (
          <article key={c.credit_id}>
            {
              <img
                src={
                  c.profile_path
                    ? `https://image.tmdb.org/t/p/original${c.profile_path}`
                    : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }
              />
            }
            <p>
              {c.name} - {c.job}
            </p>
          </article>
        ))}
      </StyledCreditInfo>
    </StyleMovieDetailSection>
  );
};

export default MovieDetail;
