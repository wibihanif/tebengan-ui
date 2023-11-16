import React, { PropsWithChildren, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Flex, Layout, theme } from "antd";
import Route from "./route/Route";
import tebenganDashboardLogo from "../../public/tebengan-dashboard-logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import routeItems from "./route";

const { Header, Content, Sider } = Layout;

const TebenganShell: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = useRouter();
  const isActiveRoute = routeItems.find(
    (routeItem) => pathname.split("/")[1] === routeItem.linkTo.split("/")[1]
  );

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          backgroundColor: "#1E8AF5",
          justifyContent: "space-between",
        }}
      >
        <Flex gap={100}>
          <Image
            src={tebenganDashboardLogo}
            alt="image"
            width={160}
            style={{ marginTop: 4 }}
          />
          <p style={{ fontWeight: "bold", color: "white" }}>
            {isActiveRoute?.title}
          </p>
        </Flex>
        <Flex align="center">
          <p style={{ color: "white", marginRight: 16 }}>Wibi Hanif Wibowo</p>
          <Avatar size={40} icon={<UserOutlined />} />
        </Flex>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <div style={{ paddingInline: 10, marginTop: 5 }}>
            <Button
              type="text"
              onClick={toggleCollapsed}
              style={{ fontSize: "15px" }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
          <div className="logo" />
          {collapsed && isActiveRoute ? (
            <Route isActiveRoute={isActiveRoute} collapsed={collapsed} />
          ) : null}
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
