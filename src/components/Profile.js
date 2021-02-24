import React, { useEffect } from "react";
import SimpleTabs from '../components/helpers/ProfileTab'

const Profile = ({
  username,
  myMessages,
  setMyMessages,
  myPosts,
  setMyPosts,
}) => {
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
        setMyMessages(data.data.messages);
        setMyPosts(data.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [userToken, setMyMessages, setMyPosts]);

  console.log(myMessages);

  return (
    <div>
      <SimpleTabs myMessages={myMessages} username={username} />
    </div>
  );
};

export default Profile;
