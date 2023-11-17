import { Avatar, Button, Flex, TableColumnsType } from "antd";
import {
  FilterFilled,
  TabletOutlined,
  DesktopOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";

interface DataType {
  key: React.Key;
  id?: ReactNode;
  status?: ReactNode;
  name?: ReactNode;
  contact?: ReactNode;
  address?: ReactNode;
  trip?: ReactNode;
  voucher?: ReactNode;
  action?: ReactNode;
}

export const columns: TableColumnsType<DataType> = [
  {
    title: (
      <Flex gap={5}>
        <p>ID</p>
        <FilterFilled style={{ color: "gray" }} />
      </Flex>
    ),
    dataIndex: "id",
  },
  {
    title: (
      <Flex gap={5}>
        <p>Status</p>
        <FilterFilled style={{ color: "gray" }} />
      </Flex>
    ),
    dataIndex: "status",
  },
  {
    title: (
      <Flex gap={5}>
        <p>Name</p>
        <FilterFilled style={{ color: "gray" }} />
      </Flex>
    ),
    dataIndex: "name",
  },
  {
    title: (
      <Flex gap={5}>
        <p>Contact</p>
        <FilterFilled style={{ color: "gray" }} />
      </Flex>
    ),
    dataIndex: "contact",
  },
  {
    title: (
      <Flex gap={5}>
        <p>Address</p>
        <FilterFilled style={{ color: "gray" }} />
      </Flex>
    ),
    dataIndex: "address",
    width: "240px",
  },
  {
    title: "Trip",
    dataIndex: "trip",
  },
  {
    title: "Voucher",
    dataIndex: "voucher",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

export const tableData: DataType[] = [
  {
    key: 0,
    id: (
      <>
        <p style={{ fontSize: 12 }}>User ID </p>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>457</p>
        <p style={{ marginTop: 5, fontSize: 12 }}>Employee ID</p>
        <p style={{ fontSize: 12 }}>BAS-51234</p>
        <DesktopOutlined />
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Date created 9 Jun 2022
        </p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          First app login on 22 Nov 2022
        </p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            width: "50px",
            border: "1px solid #1E8AF5",
            textAlign: "center",
            borderRadius: 10,
            backgroundColor: "#bce8ff",
          }}
        >
          <p style={{ fontSize: 10, color: "#1E8AF5" }}>Lead</p>
        </div>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>-</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Last booking
        </p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>-</p>
      </>
    ),
    name: (
      <>
        <Avatar size={40} icon={<UserOutlined />} />
        <p style={{ marginTop: 5, fontSize: 12 }}>Ruben Turnado</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Male</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Company</p>
        <p style={{ fontSize: 12 }}>SKTrans</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Department</p>
        <p style={{ fontSize: 12 }}>SKTrans</p>
      </>
    ),
    contact: (
      <>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Mobile Number
        </p>
        <p style={{ fontSize: 12 }}>+62 812 3546 7890</p>
        <Flex gap={5}>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Email</p>
          <CheckCircleOutlined />
        </Flex>
        <p style={{ fontSize: 12 }}>rubentornado@email.com</p>
      </>
    ),
    address: (
      <Flex>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Home</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Work</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
      </Flex>
    ),
    trip: <p style={{ fontSize: 12 }}>-</p>,
    voucher: <p style={{ fontSize: 12 }}>-</p>,
    action: (
      <div
        style={{
          display: "grid",
          gap: 10,
          paddingRight: 10,
        }}
      >
        <Button style={{ width: "100%", color: "black", fontWeight: "bold" }}>
          Edit
        </Button>
        <Button style={{ width: "100%" }} disabled>
          Delete
        </Button>
        <Button
          style={{
            width: "100%",
            color: "red",
            borderColor: "red",
          }}
          disabled
        >
          Suspend
        </Button>
      </div>
    ),
  },
  {
    key: 1,
    id: (
      <>
        <p style={{ fontSize: 12 }}>User ID </p>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>457</p>
        <TabletOutlined />
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Date created 9 Jun 2022
        </p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            width: "50px",
            border: "1px solid #00a478",
            textAlign: "center",
            borderRadius: 10,
            backgroundColor: "#a0fad6",
          }}
        >
          <p style={{ fontSize: 10, color: "#00a478" }}>Active</p>
        </div>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>1 day ago</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Last booking 2 May 2022
        </p>
      </>
    ),
    name: (
      <>
        <Avatar size={40} icon={<UserOutlined />} />
        <p style={{ marginTop: 5, fontSize: 12 }}>Keira Calzoni</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Female</p>
      </>
    ),
    contact: (
      <>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Mobile Number
        </p>
        <p style={{ fontSize: 12 }}>+62 812 3546 7890</p>
        <Flex gap={5}>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Email</p>
          <CheckCircleOutlined />
        </Flex>
        <p style={{ fontSize: 12 }}>rubentornado@email.com</p>
      </>
    ),
    address: (
      <Flex>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Home</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Work</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
      </Flex>
    ),
    trip: (
      <>
        <p style={{ fontSize: 12 }}>32 Total Trips</p>
        <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Details</p>
      </>
    ),
    voucher: (
      <>
        <p style={{ marginTop: 5, fontSize: 12, fontWeight: "bold" }}>Flexi</p>
        <p style={{ fontSize: 12 }}>Flexi pass 5X &#8226; 5X Trips</p>
        <p style={{ fontSize: 12 }}>BSD ↔ SCBD</p>
        <p style={{ fontSize: 12, marginTop: 5 }}>
          Flexi pass 3X &#8226; 3X Trips
        </p>
        <p style={{ fontSize: 12 }}>BSD ↔ SCBD</p>
        <p style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
          Bundle
        </p>
        <p style={{ fontSize: 12 }}>Flexi pass 5X &#8226; 5X Trips</p>
        <p style={{ fontSize: 12 }}>BSD ↔ SCBD</p>
        <p style={{ fontSize: 12, marginTop: 5 }}>
          Flexi pass 3X &#8226; 3X Trips
        </p>
        <p style={{ fontSize: 12 }}>BSD ↔ SCBD</p>
      </>
    ),
  },
  {
    key: 2,
    id: (
      <>
        <p style={{ fontSize: 12 }}>User ID </p>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>457</p>
        <p style={{ marginTop: 5, fontSize: 12 }}>Employee ID</p>
        <p style={{ fontSize: 12 }}>BAS-51234</p>
        <TabletOutlined />
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Date created 9 Jun 2022
        </p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            width: "50px",
            border: "1px solid black",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <p style={{ fontSize: 10 }}>Recent</p>
        </div>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>56 days ago</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Last booking 9 Jun 2022
        </p>
      </>
    ),
    name: (
      <>
        <Avatar size={40} icon={<UserOutlined />} />
        <p style={{ marginTop: 5, fontSize: 12 }}>Kristianto</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Male</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Company</p>
        <p style={{ fontSize: 12 }}>Toyota Tsusho</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Department</p>
        <p style={{ fontSize: 12 }}>Chemicals</p>
      </>
    ),
    contact: (
      <>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Mobile Number
        </p>
        <p style={{ fontSize: 12 }}>+62 812 3546 7890</p>
        <Flex gap={5}>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Email</p>
          <CheckCircleOutlined />
        </Flex>
        <p style={{ fontSize: 12 }}>rubentornado@email.com</p>
      </>
    ),
    address: (
      <Flex>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Home</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Work</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
      </Flex>
    ),
    trip: (
      <>
        <p style={{ fontSize: 12 }}>32 Total Trips</p>
        <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Details</p>
      </>
    ),
    voucher: <p style={{ fontSize: 12 }}>-</p>,
  },
  {
    key: 3,
    id: (
      <>
        <p style={{ fontSize: 12 }}>User ID </p>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>457</p>
        <p style={{ marginTop: 5, fontSize: 12 }}>Employee ID</p>
        <p style={{ fontSize: 12 }}>BAS-51234</p>
        <DesktopOutlined />
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Date created 9 Jun 2022
        </p>
      </>
    ),
    status: (
      <>
        <div
          style={{
            width: "50px",
            border: "1px solid grey",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <p style={{ fontSize: 10, color: "grey" }}>Inactive</p>
        </div>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          125 days ago
        </p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Last booking 2 May 2022
        </p>
      </>
    ),
    name: (
      <>
        <Avatar size={40} icon={<UserOutlined />} />
        <p style={{ marginTop: 5, fontSize: 12 }}>
          Waluyo Brahmono Paulo Margono
        </p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Male</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Company</p>
        <p style={{ fontSize: 12 }}>Toyota Tsusho</p>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Department</p>
        <p style={{ fontSize: 12 }}>Processing</p>
      </>
    ),
    contact: (
      <>
        <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
          Mobile Number
        </p>
        <p style={{ fontSize: 12 }}>+62 812 3546 7890</p>
        <Flex gap={5}>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Email</p>
        </Flex>
        <p style={{ fontSize: 12 }}>-</p>
      </>
    ),
    address: (
      <Flex>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Home</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
        <div>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>Work</p>
          <p style={{ fontSize: 12, fontWeight: "bold" }}>Master Pro</p>
          <p style={{ fontSize: 12 }}>
            Kecematan Serpong, Kota Tangerang Selatan
          </p>
          <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Map</p>
          <p style={{ marginTop: 5, color: "grey", fontSize: 12 }}>
            Depart at 08:00
          </p>
          <p style={{ color: "grey", fontSize: 12 }}>Arrival at 19:00</p>
        </div>
      </Flex>
    ),
    trip: (
      <>
        <p style={{ fontSize: 12 }}>1 Total Trips</p>
        <p style={{ fontSize: 12, color: "#1E8AF5" }}>View Details</p>
      </>
    ),
    voucher: <p style={{ fontSize: 12 }}>-</p>,
  },
];
