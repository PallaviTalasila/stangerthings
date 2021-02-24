import React from "react";
import { fetchEditPost } from "../../api";
import swal from "sweetalert";


const EditPost = ({
  userToken,
  formTitle,
  setFormTitle,
  formDescription,
  setFormDescription,
  formPrice,
  setFormPrice,
  formLocation,
  setFormLocation,
  formWillDeliver,
  setFormWillDeliver,
  postId,
  setPosts,
  posts,
}) => {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await fetchEditPost(
        postId,
        userToken,
        formTitle,
        formDescription,
        formPrice,
        formLocation,
        formWillDeliver
      );
      console.log(data);
      swal("Post successfully edited");
      setPosts(posts);
      setFormTitle("");
      setFormDescription("");
      setFormPrice("");
      setFormLocation('');
      setFormWillDeliver(false);
    } catch (error) {
      console.error(error);
      swal("Failed to post");
    }
  }

  return (
    <div className="form-style-8">
      <h2>Edit Post</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formTitle}
          onChange={(event) => setFormTitle(event.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formDescription}
          onChange={(event) => setFormDescription(event.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formPrice}
          onChange={(event) => setFormPrice(event.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formLocation}
          onChange={(event) => setFormLocation(event.target.value)}
        />
        <label>
          <input
            type="checkbox"
            name="deliver"
            checked={formWillDeliver}
            onChange={(event) => setFormWillDeliver(true)}
          />
          Willing to Deliver?
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
