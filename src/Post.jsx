import React from "react";
import { memo } from "react";
function Post({ text, removePost }) {
  console.log("postshi shemovidaa");
  return (
    <div className="post">
      <div className="delete" onClick={removePost}>
        X
      </div>
      <p>{text}</p>
    </div>
  );
}

export default memo(Post);
