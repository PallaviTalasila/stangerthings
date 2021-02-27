import React, { useState } from "react";
import { addPost } from "../../api";
import swal from "sweetalert";

const initialFormData = Object.freeze({
  title: "",
  description: "",
  price: "",
  location: "",
  deliver: false,
});

const AddPost = (props) => {
  const [formData, updateFormData] = useState(initialFormData);
  const { loggedIn, userToken, setPosts, posts} = props;

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value.trim();
    updateFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPost(userToken, formData);
      swal("Post successfully Added");
      setPosts(posts);
      
    } catch (error) {
      console.error(error);
      swal("Failed to Add Post");
    }
  }
  return (
    loggedIn && (
      <div className="form-style-8">
        <h2>Add New Post</h2>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="deliver"
              checked={formData.deliver}
              onChange={handleChange}
            />
            Willing to Deliver?
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddPost;
