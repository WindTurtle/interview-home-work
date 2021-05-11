import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import "./styles.scss";
import { convertDate } from "utils";
import moment from "moment";
import CommentList from "../CommentList";

Post.propTypes = {
  post: PropTypes.object,
};

const randomColor = (arr) => {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
};

function Post({ post }) {
  const { title, created_at, owner, content, tags } = post;
  const colorList = [
    "red",
    "geekblue",
    "lime",
    "orange",
    "magenta",
    "cyan",
    "green",
    "purple",
  ];
  const createdFormat = convertDate(created_at);
  const foreignTime = moment(new Date(createdFormat)).format("MMM DD, YYYY");
  return (
    <>
      <Row className="item" style={{ justifyContent: "center" }}>
        <Col className="item__title" span={24}>
          <Title level={1}>{title}</Title>
        </Col>
        <Col className="item__info" span={12}>
          <Title level={4}>{`Author: ${owner}`}</Title>
          <Title
            style={{ marginTop: 0 }}
            level={4}
          >{`Created at: ${foreignTime}`}</Title>
        </Col>
        <Col className="item__tag" span={12}>
          {tags.map((idx) => {
            return (
              <Tag color={randomColor(colorList)} key={idx}>
                {idx}
              </Tag>
            );
          })}
        </Col>
        <Col className="item__content" span={24}>
          <Title level={3}>
            {content.length > 100
              ? content.substring(0, 500 - 3) + " ..."
              : content}
          </Title>
        </Col>
        <CommentList owner={owner} />
      </Row>
    </>
  );
}

export default Post;
