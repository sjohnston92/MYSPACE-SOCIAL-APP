import Axios from "axios";
import React, {useState, useEffect} from "react";
import {Jumbotron, Badge,Button} from "react-bootstrap";

const MyFriend = () => {

  const [friends,setFriends]= useState([]);
  
  async function getLikedFriends(){
    try{
      let res = await Axios.get("/api/my_friends")
      setFriends(res.data);
    }catch(error){
      console.log(error.response)
    };
  };

  useEffect(() => {
     getLikedFriends();
  },[])
  





return (
        <>

       {friends.map((friend) => (
            <Jumbotron key={friend.id}>
            <h1>{friend.name} <Badge variant="secondary">{friend.age}</Badge> </h1> 
            <p>{friend.bio}</p>
            <br />
            <Button> Make Top 8</Button>
            </Jumbotron>
        
        ))}     
        </>
)
}
export default MyFriend;