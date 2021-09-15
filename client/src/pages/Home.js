import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../api/api";
import Card from "../components/Card";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Home = () => {
  const [movieNow, setMovieNow] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${URL}/now_playing/?api_key=${API_KEY}`
        );

        setMovieNow(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <section>
      <h2>Now Playing</h2>
      {movieNow.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default Home;
