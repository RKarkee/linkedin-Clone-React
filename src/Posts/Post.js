import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import InputOption from "../Feeds/InputOption";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  // user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
