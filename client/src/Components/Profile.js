import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import {Container,Button} from 'react-bootstrap';
import Posts from './Posts'


// Use Auth Provider Context to show all variables from user's setting. ex. Email. 


const Profile = () => {

  const [posts,setPosts]= useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/posts")
  //     .then((res) => {
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       alert("error on Profile");
  //     })
  // }, []);

  //add post here
const addPost = (post) =>setPosts([...posts,post])

  

  return(
    <>
  <h1>Profile</h1>
  
    <PostForm add={addPost} />
    <br />
    <Posts />
    </>

  )
}

export default Profile;