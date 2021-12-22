import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import styled from "styled-components";

const StyledPostSection = styled.section`
  margin: 4em auto 0;
  width: 90%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <StyledPostSection>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </StyledPostSection>
  );
};

export default Posts;
