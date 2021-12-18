import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPost = styled.article`
  width: 100%;
  border-radius: 1em;
  margin: 0 auto;
  padding: 1em;
  -webkit-box-shadow: 3px 3px 13px 1px #e5e5e5;
  box-shadow: 3px 3px 13px 1px #e5e5e5;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.2;
    margin: 1em 0;
    height: 3.6em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    border-top: 1px solid #d3d3d3;
    padding-top: 0.5em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Post = ({ post }) => {
  return (
    <StyledPost>
      <StyledLink to={`/post/${post._id}`}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div>
          <span>{post.updatedAt.split("T")[0]}</span>
          <span>by {post.username}</span>
        </div>
      </StyledLink>
    </StyledPost>
  );
};

export default Post;
