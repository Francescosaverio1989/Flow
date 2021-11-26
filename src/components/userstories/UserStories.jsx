import React, { useState } from "react";
import SuggestionSong from "../suggestionsong/SuggestionSong";
import "./UserStories.css";

const UserStories = ({ parentId, userStories, setUserStories }) => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleCommentSubmission = async (e) => {
    e.preventDefault();
    let userStory = {
      title: title,
      story: story,
    };
    setUserStories([...userStories, userStory])
    console.log(userStories);
  };

  return (
    <div className="user-stories">
      <h3>LET IT FLOW</h3>
      <form className="user-stories-countainer" onSubmit={(e) => handleCommentSubmission(e)}>
        <label htmlFor="title">
          Title </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        
        <label htmlFor="story">
          Post your own story
          </label>
          <textarea
            id="story"
            onChange={(e) => setStory(e.target.value)}
            value={story}
            title="story"
            required="required"
          ></textarea>
        
        <button type="submit" className="btn">
          Post
        </button>
      </form>
      <SuggestionSong />
    </div>
  );
};

export default UserStories;
