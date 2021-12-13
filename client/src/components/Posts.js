import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

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
    <section>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </section>
  );
};

export default Posts;
