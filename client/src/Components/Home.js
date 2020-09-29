import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Container} from 'react-bootstrap';



const Home = () => {

  const [friends,setFriends] = useState([]);

  const addFriend = async (id) => {
    let res = axios.put(`/api/friends/${id}`);
    
    const addedFriends = friends.filter((friend) => friend.id !== id);
  };

  const removeFriendFromUI = (id) => {
    const addedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(addedFriends);
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
          </Card>
        </div>


      )
    }

  }

return(
  <Container>
  {renderFriends()}
  {renderFriends()}
  </Container>
);
}

export default Home;





