import React from "react";

const MovieDetail = ({ location }) => {
  console.log(location);
  return <div>movieDetail{location.pathname}</div>;
};

export default MovieDetail;
