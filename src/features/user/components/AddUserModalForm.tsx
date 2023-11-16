import { Modal } from "antd";
import React from "react";

interface AddUserModalFormProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const AddUserModalForm: React.FC<AddUserModalFormProps> = ({
  handleCancel,
  handleOk,
  isModalOpen,
}) => {
  return (
    <Modal
      title="Add New User"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
