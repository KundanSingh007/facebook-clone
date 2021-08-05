import React from "react";
import './Post.css'
import { Avatar } from '@material-ui/core';

function Post({ profilePic, image, username, timestamp, message }) {
  return <div class="post">
      <div className="post__top">
          <Avatar src={profilePic}
          className="post__avatar" />
          <div className="postInfo">
              <h3>{username}</h3>
              <p>Timestamp...</p>
          </div>

      </div>
  </div>;
}

export default Post;
