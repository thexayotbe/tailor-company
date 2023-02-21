import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setStoreSelectedData } from "../../../../redux/storeSlice";
import { Wrapper } from "./style";

const TextInput = ({ saveHandler, cancelHandler, oldValue }) => {
  const { flowID } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.store);

  const changeHandler = (data) => {
    dispatch(setStoreSelectedData(data));
  };
  const onChange = (e) => {
    changeHandler({ ...selectedData, productName: e.target.value });
  };

  const onSave = () => {
    saveHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/update`,
      method: "POST",
      data: {
        ...selectedData,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  const checkAndAdd = () => {
    oldValue.productName === selectedData.productName
      ? cancelHandler()
      : onSave();
  };
  return (
    <Wrapper>
      <Input
        value={selectedData.productName}
        onChange={onChange}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && checkAndAdd()}
      />
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={checkAndAdd}>
          {" "}
          Save
        </Button>
        <Button danger type="primary" onClick={cancelHandler}>
          Cancel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export default TextInput;
