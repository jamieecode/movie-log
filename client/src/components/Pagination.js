import styled from "styled-components";

const StyledPagination = styled.div`
  margin: 2em 0 0;
  display: flex;
  justify-content: space-evenly;
  button {
    width: 2.2rem;
    height: 2.5rem;
    background-color: #032541;
    color: #fff;
    font-size: 1.1rem;
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
