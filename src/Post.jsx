import React from "react";
import { memo } from "react";
function Post({ text }) {
  console.log("postshi shemovidaa");
  return (
    <div className="post">
      <p>{text}</p>
    </div>
  );
}

export default memo(Post);
