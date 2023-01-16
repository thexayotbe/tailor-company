import { Form, Input, Modal } from "antd";
import React from "react";
import { Wrapper } from "./style";

const FlowModal = ({ open, onCancel }) => {
  return (
    <Wrapper>
      <Modal title="Add Product" open={open} onCancel={onCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default FlowModal;
