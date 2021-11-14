import styled from "styled-components";

const StyledPagination = styled.div`
  margin: 2em 0 0;
  display: flex;
  justify-content: center;
  button {
    width: 2.2rem;
    height: 2.5rem;
    border-radius: 0.2em;
    background-color: #032541;
    color: #fff;
    font-size: 1.1rem;
    margin: 0 0.5em;
  }
  button:hover {
    background-color: #01b4e4;
    transition: 0.4s;
  }
`;

const Pagination = ({ castsPerPage, totalCasts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCasts / castsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => paginate(num)}>
          {num}
        </button>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
