import React from "react";
import { memo } from "react";

function PostLengthCalc({ postLength }) {
  console.log("kalkulatorshi shemovida");
  return (
    <div className="post-length-box">
      <p>post length sum is - {postLength}</p>
    </div>
  );
}

export default memo(PostLengthCalc);
