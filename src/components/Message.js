import React from 'react' 
import { useState } from "react";
import swal from 'sweetalert';

/* i still need to write code to check to see if the person is loggin in and not the author and i need to 
make sure i am using the correct post id from the post i am trying to send a message to */
const Messages = async ({username, postId}) => {

    const [content, setContent] = useState('');

    const token = localStorage.getItem(`${username}Token`);


const postMessage = () => {
  try {
    const resp = await fetch(
      `https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt
  /posts/${postId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            message: {
                content: `${content}`
              }
        }),
      }
    );
    const data = await resp.json();
    if(data.success === true) {
        swal('Message sent successfully');
        setContent('');
    } else {
        swal('Message failed to send');
    }

  } catch (error) {
    console.error(error);
  }
};


return (
    <div className="form-style-8">
      
      <form onSubmit={postMessage}>
        <input
          type="text"
          placeholder="Type message here"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div> 
)

}

export default Messages