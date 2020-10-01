import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card} from "react-bootstrap";

const basePosts = [
  {id: 1, body: "Wawowewo", user_id: 1},
  {id: 2, body: "Bapadobebop", user_id: 1},
];

const Posts = () => {

  const [posts, setPosts] = useState(basePosts);

  useEffect(() => {
    axios.get("/api/posts")
      .then( res => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert("not able to get posts");
      });
  }, []);

  const renderPosts = () => {
    return posts.map((post) => (
      <Card key={post.id}>
      <Card.Body>
      <Card.Text>
        {post.body}
      </Card.Text>
      </Card.Body>
      </Card>
    ));
  };

  const addPost = (post) => {
    console.log(post);
  };
  return ( 
  <>
  <h1>My Posts</h1>
  {renderPosts()}
  </>
  );
 

}

export default Posts;