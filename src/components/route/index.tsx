import { ReactNode } from "react";
import {
  UserOutlined,
  DashboardOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

export interface RouteItem {
  keyValue: string;
  icon: ReactNode;
  title: string;
  linkTo: string;
}

const routeItems: RouteItem[] = [
  {
    icon: <UserOutlined />,
    keyValue: "User List",
    linkTo: "/",
    title: "User List",
  },
  {
    icon: <DashboardOutlined />,
    keyValue: "Driver List",
    linkTo: "/driver-list",
    title: "Driver List",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "Route List",
    linkTo: "/route-list",
    title: "Route List",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "Voucher Catalogue",
    linkTo: "/voucher-catalogue",
    title: "Voucher Catalogue",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "Trip List",
    linkTo: "/trip-list",
    title: "Trip List",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "Booking List",
    linkTo: "/booking-list",
    title: "Booking List",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "All Transaction",
    linkTo: "/all-transaction",
    title: "All Transaction",
  },
  {
    icon: <BranchesOutlined />,
    keyValue: "Ride List",
    linkTo: "/ride-list",
    title: "Ride List",
  },
];

export default routeItems;
