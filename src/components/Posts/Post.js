import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import EditPost from "./EditPost";
import { fetchDelete } from "../../api";
import swal from "sweetalert";
import Drawer from "@material-ui/core/Drawer";

const Post = (props) => {
  const { post, onChange } = props;
  const { title, description, price, location, deliver, _id } = post;
  const nothing = () => {};

  return (
    <div className="form-style-8">
      <h2>Post</h2>
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
            disabled={!!deliver}
            onChange={deliver ? nothing : onChange}
          />
          Willing to Deliver?
        </label>
      </form>
    </div>
  );
};

export default Post;
