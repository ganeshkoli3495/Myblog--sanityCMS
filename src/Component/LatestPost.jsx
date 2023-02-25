import React from "react";
import Post from "./Post";

const LatestPost = () => {
  return (
    <div className="latest_post ">
      <div className="latestpost_content max-width">
        <h2>Latest Post</h2>
      </div>
      <Post />
    </div>
  );
};

export default LatestPost;
