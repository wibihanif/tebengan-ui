import { Button, Flex, Input, Modal } from "antd";
import React, { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { AddUserModalForm } from "./AddUserModalForm";

const summaryItems = [
  {
    amount: 456,
    description: "Total Users",
  },
  {
    amount: 396,
    description: "Active Users",
  },
  {
    amount: 123,
    description: "Recent Users",
  },
  {
    amount: 60,
    description: "Inactive Users",
  },
  {
    amount: 60,
    description: "Lead Users",
  },
];

export const HeaderSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Flex justify="space-between">
        <Flex gap={60}>
          {summaryItems.map((summaryItem, index) => {
            return (
              <div
                style={{ borderLeft: "2px solid black", paddingLeft: 5 }}
                key={index}
              >
                <p style={{ fontWeight: "bold", fontSize: 15 }}>
                  {summaryItem.amount}
                </p>
                <p>{summaryItem.description}</p>
              </div>
            );
          })}
        </Flex>
        <Button
          style={{ backgroundColor: "#E8F2FF" }}
          onClick={() => showModal()}
        >
          <Flex gap={5}>
            <PlusOutlined style={{ color: "#1E8AF5" }} />
            <p style={{ color: "#1E8AF5", fontWeight: "bold" }}>Add New User</p>
          </Flex>
        </Button>
      </Flex>
      <Flex justify="space-between" style={{ marginTop: 20 }}>
        <div style={{ width: "30%" }}>
          <Input
            addonAfter={<SearchOutlined />}
            placeholder="Search ID, name, mobile number, email"
          />
        </div>
        <Flex gap={4}>
          <Button disabled>
            <p style={{ fontWeight: "bold" }}>Export</p>
          </Button>
          <Button style={{ backgroundColor: "#E8F2FF" }}>
            <p style={{ color: "#1E8AF5", fontWeight: "bold" }}>
              Export All Data
            </p>
          </Button>
        </Flex>
      </Flex>
      <AddUserModalForm
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};
