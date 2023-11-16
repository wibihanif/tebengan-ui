import { Menu, Row } from "antd";
import React, { useState } from "react";
import routeItems, { RouteItem } from ".";
import Link from "next/link";

interface RouteProps {
  collapsed: boolean;
  isActiveRoute: RouteItem;
}

const Route: React.FC<RouteProps> = ({ collapsed, isActiveRoute }) => {
  const [selectedKey, setSelectedKey] = useState(isActiveRoute?.keyValue);

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const routeComponents = routeItems.map((routeItem) => {
    return (
      <Menu.Item
        key={routeItem.keyValue}
        style={{
          backgroundColor: selectedKey === routeItem.keyValue ? "#1E8AF5" : "",
          color: selectedKey === routeItem.keyValue ? "white" : "",
        }}
      >
        {routeItem.icon}
        <span>{routeItem.title}</span>
        <Link href={routeItem.linkTo} />
      </Menu.Item>
    );
  });

  return (
    <div>
      <Menu
        defaultSelectedKeys={[selectedKey!]}
        mode="inline"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick}
      >
        {routeComponents}
      </Menu>
    </div>
  );
};

export default Route;
