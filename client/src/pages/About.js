import styled from "styled-components";

const AboutContainer = styled.section`
  h3 {
    margin-bottom: 1em;
  }
  width: 55%;
  margin: 6em auto;
  font-size: 1.5rem;
  font-weight: 500;
`;

const About = () => {
  return (
    <AboutContainer>
      <h3>Welcome! </h3>This is a project built in React, Node.js, Express, and
      MongoDB with TMDB Movie API for movie data. You can read without logging
      in this website, but you have to be registered to write.
    </AboutContainer>
  );
};

export default About;
