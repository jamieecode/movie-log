import { useState, useEffect } from "react";
import styled from "styled-components";
import { API_KEY } from "../api/api";
import axios from "axios";

const StyledInputSection = styled.section`
  z-index: 2;
  width: 70%;
  position: relative;

  form {
    display: flex;
  }
  input {
    padding: 0.6em 0;
    border-radius: 3em;
    width: 100%;
  }

  input[placeholder] {
    font-size: 1.3rem;
    padding-left: 1em;
  }

  div {
    position: absolute;
    top: 70%;
    left: 0;
    padding: 0.5em;
    background: #fff;
    width: 100%;
  }
`;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const term = inputValue.trim().toLowerCase();
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`,
        {
          params: {
            query: term,
          },
        }
      );
      setData(data);
    };
    if (term) {
      search();
    }
  }, [term]);

  return (
    <StyledInputSection>
      <form>
        <input
          type="text"
          placeholder="search ..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          autoFocus
        />
        <button>Search</button>
      </form>
      <div>
        {data.length !== 0 &&
          data.results.map((item) => (
            <p key={item.id}>
              <a href={`https://www.themoviedb.org/movie/${item.id}`}>
                {item.title}
              </a>
            </p>
          ))}
      </div>
    </StyledInputSection>
  );
};

export default SearchBar;
