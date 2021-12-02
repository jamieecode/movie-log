import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { API_KEY } from "../api/api";
import axios from "axios";
import { GrFormClose } from "react-icons/gr";

const StyledInputSection = styled.section`
  z-index: 2;
  margin-top: 3em;
  width: 80%;
`;

const StyledInputs = styled.div`
  width: 85%;
  display: flex;
  align-items: center;

  form {
    display: flex;
    background-color: white;
    align-items: center;
  }

  input {
    width: 30rem;
    padding: 0.4em;
  }

  input[placeholder] {
    font-size: 1.3rem;
  }

  span {
    width: 2em;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  background-color: #032541;
  color: #01b4e4;
  padding: 1em;
`;

const StyledResults = styled.div`
  width: 30rem;
  div {
    background-color: white;
    padding: 0.5em;
  }

  div:hover {
    background-color: #caf0f8;
    cursor: pointer;
    transition: 0.4s linear;
  }
`;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);
  const term = inputValue.trim().toLowerCase();

  const [resultOpen, setResultOpen] = useState(false);

  const clearInput = () => {
    setInputValue("");
    setData([]);
  };

  const history = useHistory();
  const handleClick = () => {
    if (movie.id === undefined)
      alert(
        `Sorry, we can't find the movie with that name. Please try it again.`
      );
    else {
      history.push(`/movie/${movie.id}`);
    }
  };

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
      <StyledInputs>
        <form>
          <input
            type="text"
            placeholder="search ..."
            onChange={(e) => {
              setInputValue(e.target.value);
              setResultOpen(true);
              setMovie(inputValue);
            }}
            value={inputValue}
            autoFocus
          />
          <span>
            {inputValue.length > 0 && <GrFormClose onClick={clearInput} />}
          </span>
        </form>

        <StyledButton onClick={handleClick}>search</StyledButton>
      </StyledInputs>
      <StyledResults>
        {resultOpen &&
          data.results?.slice(0, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setMovie(item);
                setInputValue(item.title);
                setResultOpen(false);
              }}
            >
              {item.title}
            </div>
          ))}
      </StyledResults>
    </StyledInputSection>
  );
};

export default SearchBar;
