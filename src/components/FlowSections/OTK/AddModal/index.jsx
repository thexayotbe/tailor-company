import { Button, Input, Modal, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../Generic/Styles";

const AddModal = ({ open, onCancel, onAdd, onOpen, createDate, isLoading }) => {
  const { flowID } = useParams();
  const [productName, setProductName] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [addPending, setAddPending] = useState(false);
  const error = () => {
    message.error("Please enter a product name", 3);
  };
  const addUserCheck = () => {
    if (productName.length === 0) {
      error();
    } else addUser();
  };

  const addUser = async () => {
    setAddPending(true);
    const { data } = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/otk/add_otk_product`,
      data: {
        productName,
        flowType: flowID,
        createDate,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const addData = data.data[0].data;
    onAdd(addData[addData.length - 1]);
    setAddPending(false);

    onCancel();
    setProductName();
  };

  const changeHandler = (e) => {
    setProductName(e.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={() => !addPending && onCancel()}
        title="Add Product"
        okText="Add"
        onOk={addUserCheck}
        keyboard={true}
        confirmLoading={addPending}>
        <Wrapper.InputWrapper>
          <Wrapper.Label>Product Name:</Wrapper.Label>
          <Input
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === 13) && addUserCheck()
            }
            name="productName"
            onChange={changeHandler}
            value={productName}
          />
        </Wrapper.InputWrapper>
      </Modal>
      <Wrapper>
        {!isLoading ? (
          <Button type="primary" style={{ margin: "80px 0" }} onClick={onOpen}>
            + Add Product
          </Button>
        ) : (
          <Button type="primary" style={{ margin: "80px 0" }} disabled>
            + Add Product
          </Button>
        )}
      </Wrapper>
    </>
  );
};

export default AddModal;
