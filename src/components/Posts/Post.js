import { ContactsOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { login, register, addPost } from "../../api";

const Post = (props) => {
  const { post } = props;
  const { title, description, price, location, deliver } = post;
  const nothing = () => {};
  const { onChange } = props;

  return (
    <div className="form-style-8">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          readOnly={!!title}
          onChange={title ? nothing : onChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          readOnly={!!description}
          onChange={description ? nothing : onChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          readOnly={!!price}
          onChange={price ? nothing : onChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          readOnly={!!location}
          onChange={location ? nothing : onChange}
        />
        <label>
          <input
            type="checkbox"
            name="deliver"
            checked={deliver}
            value={deliver ? true : false}
            readOnly={!!deliver}
            onChange={deliver ? nothing : onChange}
          />
          Willing to Deliver?
        </label>
        <div>
          {/* <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button> */}
        </div>
      </form>
    </div>
  );
};

export default Post;
