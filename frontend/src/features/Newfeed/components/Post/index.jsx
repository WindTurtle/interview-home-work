import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import "./styles.scss";
import { convertDate } from "utils";
import moment from "moment";
Post.propTypes = {
  post: PropTypes.object,
};
function Post({ post }) {
  const { title, created_at, owner, content } = post;
  const createdFormat = convertDate(created_at);
  const foreignTime = moment(createdFormat).format("MMM DD, YYYY");
  console.log(post);
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
          <Title level={1}>{foreignTime}</Title>
        </Col>
        <Col className="item__content" span={24}>
          <Title level={3}>
            {content.length > 100
              ? content.substring(0, 500 - 3) + " ..."
              : content}
          </Title>
        </Col>
      </Row>
    </>
  );
}

export default Post;
