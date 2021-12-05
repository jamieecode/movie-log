import { useState } from "react";
import { BASE_URL, API_KEY } from "../api/api";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";

const StyledMovieInfoSection = styled.section`
  width: 80%;
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

const StyledMovieInfoCard = styled.div`
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

const MovieInfo = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [castsPerPage] = useState(12);

  const id = location.pathname.split("/")[2];

  const { data, error, loading } = useFetch(
    `${BASE_URL}/${id}?api_key=${API_KEY}&append_to_response=credits`
  );

  if (loading) return <h1>LOADING</h1>;
  if (error) console.log(error);

  //pagination;
  const indexOfLastCast = currentPage * castsPerPage;
  const indexOfFirstCast = indexOfLastCast - castsPerPage;
  const currentCasts = data?.credits.cast.slice(
    indexOfFirstCast,
    indexOfLastCast
  );
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <StyledMovieInfoSection>
      {data && (
        <>
          <StyledMovieInfoCard>
            <img
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/original/${data.poster_path} `
                  : ""
              }
              alt={data.title}
            />
            <div>
              <h1>
                {data.title}(
                {data.release_date && data.release_date.split("-")[0]})
              </h1>
              <h4>
                {data.genres &&
                  data.genres.map((genre) => (
                    <span key={genre.name}>{genre.name} </span>
                  ))}
              </h4>
              <h4>{data.runtime}m</h4>
              <p>{data.overview}</p>
              <a href={data.homepage}>{data.homepage}</a>
            </div>
          </StyledMovieInfoCard>
          <h2>Cast</h2>
          <StyledCreditInfo>
            {currentCasts.map((c) => (
              <article key={c.credit_id}>
                {
                  <img
                    src={
                      c.profile_path
                        ? `https://image.tmdb.org/t/p/original${c.profile_path}`
                        : `https://image.tmdb.org/t/p/original/${data.poster_path}`
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
            totalCasts={data.credits.cast.length}
            paginate={paginate}
          />
        </>
      )}
    </StyledMovieInfoSection>
  );
};

export default MovieInfo;
