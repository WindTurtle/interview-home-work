import React from "react";
import "./styles.scss";
import "antd/dist/antd.css";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
function Header() {
  const { Header } = Layout;
  return (
    <Layout>
      <Header className="header" theme="light">
        <div className="user">
          <DeploymentUnitOutlined className="logo" />
          <Text level={2} style={{ marginLeft: "15px" }}>
            Logo
          </Text>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" className="custom-active">
            <Text>Blogs</Text>
          </Menu.Item>
        </Menu>
        <div className="user">
          <Avatar size={60} shape="square" icon={<UserOutlined />} />
          <Text level={2} style={{ marginLeft: "15px" }}>
            name
          </Text>
        </div>
      </Header>
    </Layout>
  );
}

export default Header;
