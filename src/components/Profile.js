import React, { useState, useEffect } from "react";

const Profile = ({ username }) => {

  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);

  const userToken = localStorage.getItem(`${username}Token`);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/users/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setMessages(data.data.messages);
        setPosts(data.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [userToken]);

  return (
    <div>
      <div className="messages">
        <h1>Messages</h1>
        {messages ? <p>please login</p> : <p>{messages}</p>}
      </div>
      <div className="posts">
        <h1>Posts</h1>
        {!posts ? "please login" : posts}
      </div>
    </div>
  );
};

export default Profile;
