import React from "react";
import "./Feed.css";
import StoryReel from "../Feed/StoryReel/StoryReel";
import MessageSender from "./StoryReel/MessageSender/MessageSender";
import Post from "./Post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />

      <MessageSender />

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
