import React from "react";
import "./styles.scss";
import "antd/dist/antd.css";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar, Row, Col, Space } from "antd";
import Text from "antd/lib/typography/Text";
function Header() {
  const { Header } = Layout;
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
        <Avatar size={60} shape="square" icon={<UserOutlined />} />
        <Text
          level={2}
          style={{ marginLeft: "15px", fontSize: "20px", fontWeight: "bold" }}
        >
          Adam Levin
        </Text>
      </Col>
    </Row>
    // <Header className="header" theme="light">
    //   <div className="user">
    //     <DeploymentUnitOutlined className="logo" />
    //     <Text level={2} style={{ marginLeft: "15px" }}>
    //       Logo
    //     </Text>
    //   </div>
    //   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
    //     <Menu.Item key="1" className="custom-active">
    //       <Text>Blogs</Text>
    //     </Menu.Item>
    //   </Menu>
    //   <div className="user">
    //     <Avatar size={60} shape="square" icon={<UserOutlined />} />
    //     <Text level={2} style={{ marginLeft: "15px" }}>
    //       name
    //     </Text>
    //   </div>
    // </Header>
  );
}

export default Header;
