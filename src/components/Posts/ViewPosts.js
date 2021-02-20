import React, { useState ,useEffect} from "react";
import { fetchPosts } from "../../api";

const initialFormData = Object.freeze({
  title: "",
  description: "",
  price: "",
  location: "",
  deliver: false,
});

const ViewPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      Promise.all([fetchPosts()]).then(([posts]) => {
        setPosts(posts);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>i min posts:{}</div>;
};

export default ViewPosts;
