import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Container, Button,Row,Col } from 'react-bootstrap';




const Home = () => {

  const [friends,setFriends] = useState([]);

  const addFriend = async (id) => {
    let res = axios.put(`/api/friends/${id}`);
    
    removeFriendFromUI(id)
  };

  const removeFriendFromUI = (id) => {
  //  TODO removeFriendFromUI currently removes all instances of renderFriends() on homepage
    const filterFriends = friends.filter((friend) => friend.id !== id);
    setFriends(filterFriends);
  }

  const getFriends = async () => {
    try {
      let res = await axios.get("api/friends");
      console.log(res.data);
      setFriends(res.data);
    } catch (err) {
      console.log(err.response);
      alert("error get friends");
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  const samples =() => {
    if (friends.length === 0){
      return null;
    }
    const index = Math.floor(Math.random() * friends.length);
    console.log(index)
    return friends[index];
  }



  const renderFriends = () => {
    const friend = samples();
    console.log(friend)
    if (friend){
      return(
        <div>
          <Card key={friend.id}>
            <Card.Body>
            <Card.Title>{friend.name}</Card.Title>
            <Card.Text>
              {friend.bio}
            </Card.Text>
            <Card.Text>
              {friend.age}
            </Card.Text>
            </Card.Body>
            <Button variant="success" onClick={() => addFriend(friend.id)}>	&#x2714; Add
            </Button>
            <Button variant="info" onClick={() => removeFriendFromUI(friend.id)}> &#128128; Reject
            </Button>
          </Card>
        </div>


      )
    }

  }

return(
  <Container>
  <h1>MySpace</h1>
  <br />
  <Row xs={2} md={4} lg={6} className="justify-content-center">
  {renderFriends()} 
  {renderFriends()}
  {renderFriends()}
  </Row>
  </Container>
);
}

export default Home;





