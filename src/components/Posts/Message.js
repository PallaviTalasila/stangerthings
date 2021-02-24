import React from "react";
import swal from "sweetalert";
import { fetchMessage } from "../../api";

const Message = ({ message, setMessage, userToken, loggedIn, postId }) => {
  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      await fetchMessage(postId, userToken, message);
      setMessage("");
      swal("Your message was sent successfully");
    } catch (error) {
      swal("Message failed to send");
      console.error(error);
    }
  };

  return (
    <div className="form-style-8">
      <h2>Send Message</h2>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type Your Message Here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Message;
