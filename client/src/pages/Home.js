import Cards from "../components/Cards";
import { categories } from "../api/api";
import styled from "styled-components";

import SearchBar from "../components/SearchBar";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledMainSection = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;

  padding: 4em 0 0 4em;
  background: linear-gradient(
    to left,
    #01b4e4,
    #00bed6,
    #3ec5c3,
    #69cbb0,
    #8fcea1
  );

  div {
    margin-bottn: 1;
  }
  h1 {
    font-size: 2.2rem;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <StyledMainSection>
        <div>
          <h1>WELCOME!</h1>
          <h2>Discover Best Movies of All Time.</h2>
        </div>
        <SearchBar />
      </StyledMainSection>

      {categories.map((category) => (
        <Cards key={category} category={category} />
      ))}
    </StyledHome>
  );
};

export default Home;
