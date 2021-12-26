import Post from "./Post";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

const StyledPostSection = styled.section`
  margin: 4em auto 0;
  width: 90%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

const Posts = () => {
  const { data, error, loading } = useFetch("/post");
  if (loading) return <Spinner />;
  if (error) console.log(error);

  return (
    <StyledPostSection>
      {data?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </StyledPostSection>
  );
};

export default Posts;
