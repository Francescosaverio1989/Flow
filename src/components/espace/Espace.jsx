import React, { useState } from "react";
import Commentaire from "./Commentaire";
import "./Espace.css";

const Espace = ({ parentId }) => {
  const [userStory, setUserStory] = useState([]);

  const handleCommentSubmission = async (e) => {
    e.preventDefault();
    let comment = {
      name: name,
      content: content,
      pId: parentId || null,
      time: new Date(),
    };
    setUserStory([...userStory, comment])

    console.log(userStory)

  };

  return (
    <div className="espace-cont">
      <form onSubmit={(e) => handleCommentSubmission(e)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="comment">
          Post your own story
          <textarea
            id="comment"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            name="comment"
            required="required"
            cols="45"
            rows="8"
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Post
        </button>
      </form>
      <div>
        {userStory.map((story, index) => (
          <div>
            <p>{story.name}</p>
            <p>{story.content}</p>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default Espace;
