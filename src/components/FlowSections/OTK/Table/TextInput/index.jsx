import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setOTKSelectedData } from "../../../../../redux/otkSlice";
import { Wrapper } from "./style";

const TextInput = ({
  currentDate,
  _id,
  updateHandler,
  cancelHandler,
  oldValue,
}) => {
  const { flowID } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const checkAndAdd = () => {
    oldValue.productName === selectedData.productName
      ? cancelHandler()
      : onSave();
  };
  const changeHandler = (data) => {
    dispatch(setOTKSelectedData(data));
  };
  const onChange = (e) => {
    changeHandler({ ...selectedData, productName: e.target.value });
  };

  const onSave = () => {
    updateHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/update`,
      method: "POST",
      data: {
        createDate: currentDate,
        flowType: flowID,
        shoudUpdateData: selectedData,
        _id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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
