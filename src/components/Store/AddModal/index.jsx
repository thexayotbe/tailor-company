import { Input, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Wrapper } from "./style";

const AddModal = ({ isOpen, cancel, addHandler }) => {
  const [newValue, setNewValue] = useState("");
  const [loading, setLoading] = useState(false);
  const getNewValue = (e) => {
    setNewValue(e.target.value);
  };
  const addProduct = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/store/create`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: newValue,
      },
    }).then((res) => {
      const data = res?.data?.data;
      addHandler(data.at(-1));
      setNewValue("");
      setLoading(false);
    });
  };
  return (
    <Wrapper>
      <Modal
        title={"Add product"}
        open={isOpen}
        onCancel={() => !loading && cancel()}
        okText={"Add Product"}
        onOk={addProduct}
        confirmLoading={loading}>
        <Wrapper.Label>Name:</Wrapper.Label>
        <Input
          onChange={getNewValue}
          value={newValue}
          onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && addProduct()}
        />
      </Modal>
    </Wrapper>
  );
};

export default AddModal;
