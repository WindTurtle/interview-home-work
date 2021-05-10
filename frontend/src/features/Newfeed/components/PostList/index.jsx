import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Post from "../Post";

PostList.propTypes = {
  postList: PropTypes.array,
};

function PostList({ postList }) {
  return (
    <Row>
      <Col span={24}>
        {postList.map((index) => {
          return <Post post={index} key={index._id} />;
        })}
      </Col>
    </Row>
  );
}

export default PostList;
