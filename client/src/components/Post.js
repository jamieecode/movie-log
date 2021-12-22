import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.6em;
  -webkit-box-shadow: 3px 3px 13px 1px #e5e5e5;
  box-shadow: 3px 3px 13px 1px #e5e5e5;
  transition: 0.3s;
  &:hover {
    transform: translate(0, -0.6rem);
  }
`;

const StyledPostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0 1em;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.2;
    margin: 0.5em 0;
    height: 3.6rem;
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
    height: 3rem;

    font-size: 0.9rem;
    border-top: 1px solid #d3d3d3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 18rem;
  border-top-right-radius: 0.6em;
  border-top-left-radius: 0.6em;
  object-fit: cover;
`;

const Post = ({ post }) => {
  const imageURL = "http://localhost:3001/images/";
  console.log(post);
  return (
    <StyledPost>
      <StyledLink to={`/post/${post._id}`}>
        {post.image && <StyledImage src={imageURL + post.image} />}
        <StyledPostContent>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div>
            <span>{post.updatedAt.split("T")[0]}</span>
            <span>by {post.username}</span>
          </div>
        </StyledPostContent>
      </StyledLink>
    </StyledPost>
  );
};

export default Post;
