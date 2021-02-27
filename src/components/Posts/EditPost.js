import React, { useState ,useEffect} from "react";
import { fetchEditPost, fetchDelete } from "../../api";
import swal from "sweetalert";

const EditPost = (props) => {
  const { postId, post, setPosts, posts, loggedIn, userToken } = props;

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [deliver, setDeliver] = useState(post.deliver);



  async function handleSave(e) {
    e.preventDefault();
    try {
      const data = await fetchEditPost(
        postId,
        userToken,
        title,
        description,
        price,
        location,
        deliver
      );

      swal("Post successfully edited");
      setPosts(posts);
    } catch (error) {
      console.error(error);
      swal("Failed to post");
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const data = await fetchDelete(postId, userToken);

      swal("Post successfully Deleted");
      setPosts(posts);
    } catch (error) {
      console.error(error);
      swal("Failed to Delete Post");
    }
  }
  return (
    <div className="form-style-8">
      <h2>Edit Post</h2>
      <form>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            name="deliver"
            value={deliver}
            onChange={(e) =>
              setDeliver(
                e.target.type === "checkbox"
                  ? e.target.checked
                  : e.target.value.trim()
              )
            }
          />
          Willing to Deliver?
        </label>
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
