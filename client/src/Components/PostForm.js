

import React, {useState} from 'react';
import axios from 'axios';
import { AuthConsumer } from '../providers/AuthProvider';
import {Form, Button} from 'react-bootstrap';


const PostForm = (props)=> {
  const [body,setBody]= useState("")




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/posts", {body})
    .then((res) =>{
      props.add(res.data);
    })
  };


  return( 
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Post</Form.Label>
    <Form.Control 
    type="text-area" 
    placeholder="Make a post here"
    name ="body"
    required
    onChange={(e) => setBody(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
</Form>

  )
}

export default PostForm;