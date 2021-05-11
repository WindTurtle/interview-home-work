import React, { useState } from "react";
import "./styles.scss";
import "antd/dist/antd.css";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";
import { Modal, Menu, Avatar, Row, Col, Space, Button } from "antd";
import Text from "antd/lib/typography/Text";
import Login from "features/Auth/Login";
function Header() {
  const credentials = false;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Row className="header" style={{ padding: "0 30px" }}>
      <Col className="header__logo" span={8}>
        <Space>
          <DeploymentUnitOutlined className="logo" />
          <Text
            level={2}
            style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold" }}
          >
            Logo
          </Text>
        </Space>
      </Col>
      <Col className="header__menu" span={8}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" className="custom-active">
            <Text>Blogs</Text>
          </Menu.Item>
        </Menu>
      </Col>
      <Col className="header__user" span={8}>
        {!credentials ? (
          <Button type="primary" size="large" onClick={showModal}>
            Login
          </Button>
        ) : (
          <>
            <Avatar size={60} shape="square" icon={<UserOutlined />} />
            <Text
              level={2}
              style={{
                marginLeft: "15px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Adam Levin
            </Text>
          </>
        )}
      </Col>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Login closeDialog={handleOk} />
      </Modal>
    </Row>
  );
}

export default Header;
