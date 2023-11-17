import {
  Checkbox,
  Flex,
  Input,
  Modal,
  Radio,
  Select,
  TimePicker,
  Upload,
} from "antd";
import React from "react";
import { CameraFilled } from "@ant-design/icons";

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
  const uploadButton = (
    <div>
      <CameraFilled style={{ color: "#1E8AF5", fontSize: 30 }} />
      <div style={{ marginTop: 8, color: "#1E8AF5" }}>Upload</div>
    </div>
  );

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="45%"
      okText="Add New User"
      cancelText="Cancel"
    >
      {/* Add new user section */}
      <div>
        <h4>Add New User</h4>
        <div
          style={{
            marginTop: 20,
            textAlign: "center",
          }}
        >
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          >
            {uploadButton}
          </Upload>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Full Name</p>
          <Input placeholder="Enter Full Name" />
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Gender</p>
          <Radio.Group>
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Mobile Number</p>
          <Input addonBefore="+62" placeholder="81XXX" />
        </div>
        <Flex justify="space-between">
          <div style={{ marginTop: 10 }}>
            <p style={{ fontSize: "13px" }}>Emergency Contact (Optional)</p>
            <Input addonBefore="+62" placeholder="81XXX" />
          </div>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontSize: "13px" }}>Relationship</p>
            <Select
              placeholder="Select"
              style={{ width: 180 }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontSize: "13px" }}>Name</p>
            <Input placeholder="Enter Name" />
          </div>
        </Flex>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Email (Optional)</p>
          <Input placeholder="Enter email" />
        </div>
      </div>

      {/* Home details section */}
      <div style={{ marginTop: 10 }}>
        <h4>Home Details</h4>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Home Address</p>
          <Input placeholder="Search home address" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Flex justify="space-between" gap={5}>
            <div style={{ display: "grid", width: "50%" }}>
              <p style={{ fontSize: "13px" }}>Arrival Time</p>
              <TimePicker />
              <Checkbox>Anytime</Checkbox>
            </div>
            <div style={{ display: "grid", width: "50%" }}>
              <p style={{ fontSize: "13px" }}>Depart Time</p>
              <TimePicker />
              <Checkbox>Anytime</Checkbox>
            </div>
          </Flex>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Home Address Notes (Optional)</p>
          <Input placeholder="Search home address" />
        </div>
      </div>

      {/* Work details section */}
      <div style={{ marginTop: 10 }}>
        <h4>Work Address</h4>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Work Address</p>
          <Input placeholder="Search work address" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Flex justify="space-between" gap={5}>
            <div style={{ display: "grid", width: "50%" }}>
              <p style={{ fontSize: "13px" }}>Arrival Time</p>
              <TimePicker />
              <Checkbox>Anytime</Checkbox>
            </div>
            <div style={{ display: "grid", width: "50%" }}>
              <p style={{ fontSize: "13px" }}>Depart Time</p>
              <TimePicker />
              <Checkbox>Anytime</Checkbox>
            </div>
          </Flex>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: "13px" }}>Work Address Notes (Optional)</p>
          <Input placeholder="Search work address" />
        </div>
      </div>
    </Modal>
  );
};
