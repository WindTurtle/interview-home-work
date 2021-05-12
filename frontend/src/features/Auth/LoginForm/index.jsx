import React from "react";
import { Form, Input, Button } from "antd";
import { useState } from "react";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 32,
  },
};
function LoginForm({ onSubmit }) {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <Form {...layout} name="basic">
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: "Please enter this field",
          },
        ]}
        onChange={handleChangeInput}
      >
        <Input name="userName" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter this field",
          },
        ]}
        onChange={handleChangeInput}
      >
        <Input.Password name="password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit} block>
          Submit
        </Button>
        {/* Or <a href="#">register now!</a> */}
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
