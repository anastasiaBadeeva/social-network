import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="#" alt="" />
          {props.message}
          {props.likeCount}
      </div>
    </div>
  );
};
export default Post;
