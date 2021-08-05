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

      <Post 
     
      profilePic="https://avatars.githubusercontent.com/u/35429799?v=4"
      message = 'wow this works'
      timestamp="This is a timestamp"
      username="kundan singh"
      image="https://yt3.ggpht.com/ytc/AKedOLRn7y2EFXPcZB4Bndc0X38tS81O0O0v8iRgD0iu=s900-c-k-c0x00ffffff-no-rj"  />
      <Post 
     
      profilePic="https://avatars.githubusercontent.com/u/35429799?v=4"
      message = 'wow this works'
      timestamp="This is a timestamp"
      username="kundan singh"
      image="https://yt3.ggpht.com/ytc/AKedOLRn7y2EFXPcZB4Bndc0X38tS81O0O0v8iRgD0iu=s900-c-k-c0x00ffffff-no-rj"  />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
