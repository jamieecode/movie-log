import React from "react";
import styled from "styled-components";

const SkeletonStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5em;
  padding: 0 0.8em;
  cursor: pointer;
  transition: 0.3s;
  div,
  h3 {
    background-color: grey;
  }
  div:nth-of-type(2) {
    width: 15rem;
    border-radius: 0.5em;
  }
`;

const Skeleton = () => {
  return (
    <SkeletonStyle>
      <div>
        <div></div>
        <p></p>
      </div>
      <div />
    </SkeletonStyle>
  );
};

export default Skeleton;
