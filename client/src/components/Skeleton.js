import React from "react";
import styled from "styled-components";

const SkeletonStyle = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: grey;
`;

const Skeleton = () => {
  return (
    <SkeletonStyle>
      <div>coming up</div>
    </SkeletonStyle>
  );
};

export default Skeleton;
