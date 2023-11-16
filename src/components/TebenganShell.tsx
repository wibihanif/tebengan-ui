import React, { PropsWithChildren } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Row, theme } from "antd";
import Link from "next/link";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined].map((val, index) => {
  const key = String(index + 1);

  return (
    <>
      <Row>
        <Link href="/">
          <p>Home</p>
        </Link>
      </Row>
      <Row>
        <Link href="/about-us">
          <p>About Us</p>
        </Link>
      </Row>
    </>
  );
  // key: `sub${key}`,
  // icon: React.createElement(icon),
  // label: `subnav ${key}`,

  // children: new Array(4).fill(null).map((_, j) => {
  //   const subKey = index * 4 + j + 1;
  //   return {
  //     key: subKey,
  //     label: `option${subKey}`,
  //   };
  // }),
});

export const TebenganShell: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          {/* <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          /> */}
          {items2}
          <Row>
            <p>{}</p>
          </Row>
        </Sider>
        <Layout style={{ padding: "24px 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default TebenganShell;
