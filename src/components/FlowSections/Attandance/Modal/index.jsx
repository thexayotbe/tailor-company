import React from "react";
import { Wrapper } from "../../../Generic/Styles";
import { Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ModalAddUser = ({ open, closeModalHandler, onAdd }) => {
  const { flowID } = useParams();
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
  });
  const addUser = async () => {
    const data = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/user/create`,
      data: {
        fullName: `${userInfo.name} ${userInfo.surname}`,
        flowType: flowID,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
    });
    onAdd(data);
    closeModalHandler();
  };

  const changeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      title="Add Worker"
      open={open}
      onCancel={closeModalHandler}
      okText={"Add"}
      onOk={addUser}>
      <Wrapper.InputWrapper>
        <Wrapper.Label>Name</Wrapper.Label>
        <Wrapper.Input
          onChange={(e) => changeHandler(e)}
          name="name"
          value={userInfo.name}
        />
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.Label>Surname</Wrapper.Label>
        <Wrapper.Input
          onChange={(e) => changeHandler(e)}
          name="surname"
          value={userInfo.surname}
        />
      </Wrapper.InputWrapper>
    </Modal>
  );
};

export default ModalAddUser;
