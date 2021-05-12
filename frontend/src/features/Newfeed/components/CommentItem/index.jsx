import React, { useState, createElement } from "react";
import PropTypes from "prop-types";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import "./styles.scss";
import { convertDate } from "utils";
import CommentInput from "../CommentInput";
Comment.propTypes = {
  countComment: PropTypes.number,
  comment: PropTypes.object,
};
function CommentItem({ comment }) {
  const { id, created_at, content } = comment;
  const createdFormat = convertDate(created_at);
  const foreignTime = moment(new Date(createdFormat)).format("MMM DD, YYYY");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  const handleComment = () => {};
  return (
    <>
      <Comment
        actions={actions}
        author={id}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="name"
          />
        }
        content={content}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{foreignTime}</span>
          </Tooltip>
        }
      />
      <CommentInput onChange={handleComment} />
    </>
  );
}

export default CommentItem;
