import React from "react";
import PropTypes from "prop-types";
import { Comment, Avatar, Form, Button, Input } from "antd";
CommentInput.propTypes = {
  onChange: PropTypes.func,
};

function CommentInput({ onChange }) {
  const { TextArea } = Input;
  const handleSubmit = () => {
    if (!onChange) return;
  };
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  return (
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<Editor onSubmit={handleSubmit} />}
    />
  );
}

export default CommentInput;
