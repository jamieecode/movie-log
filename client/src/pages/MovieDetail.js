import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../api/api";
import styled from "styled-components";
import Pagination from "../components/Pagination";

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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 
  grid-gap: 1em;
  article img{
    width: 90%;
    
  }
`;

const MovieDetail = ({ location }) => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [castsPerPage] = useState(12);

  const id = location.pathname.split("/")[2];

  //pagination
  const indexOfLastCast = currentPage * castsPerPage;
  const indexOfFirstCast = indexOfLastCast - castsPerPage;
  const currentCasts = cast.slice(indexOfFirstCast, indexOfLastCast);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/${id}?api_key=${API_KEY}&append_to_response=credits`
        );
        setMovie(data);
        setCast(data.credits.cast);
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
        {currentCasts.map((c) => (
          <article key={c.credit_id}>
            {
              <img
                src={
                  c.profile_path
                    ? `https://image.tmdb.org/t/p/original${c.profile_path}`
                    : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }
                alt={c.credit_id}
              />
            }
            <p>
              {c.name} as {c.character}
            </p>
          </article>
        ))}
      </StyledCreditInfo>
      <Pagination
        castsPerPage={castsPerPage}
        totalCasts={cast.length}
        paginate={paginate}
      />
    </StyleMovieDetailSection>
  );
};

export default MovieDetail;
