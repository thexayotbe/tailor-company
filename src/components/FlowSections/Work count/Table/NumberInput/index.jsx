import { Button, Input } from "antd";
import axios from "axios";
import e from "cors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountWorkSelectedData } from "../../../../../redux/countWorkSlice";
import { Wrapper } from "./style";

const NumberInput = ({ type, currentDate, _id, updateHandler }) => {
  const { flowID } = useParams();
  const { selectedData } = useSelector((state) => state.countWork);
  const dispatch = useDispatch();
  const cancelHandler = () => {
    dispatch(setCountWorkSelectedData({}));
  };
  const onChange = (e) => {
    dispatch(
      setCountWorkSelectedData({ ...selectedData, [type]: e.target.value })
    );
  };
  const changeByBtn = (funcType) => {
    if (funcType === "inc")
      dispatch(
        setCountWorkSelectedData({
          ...selectedData,
          [type]: Number(selectedData[type]) + 1,
        })
      );
    else
      dispatch(
        setCountWorkSelectedData({
          ...selectedData,
          [type]: +selectedData[type] - 1,
        })
      );
  };
  const onSave = () => {
    updateHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
        shoudUpdateData: selectedData,
        _id,
      },
    }).then((res) => console.log(res));
  };
  return (
    <Wrapper>
      <Wrapper.ButtonContainer isInput={true}>
        <Button
          type="default"
          danger
          style={{ width: "40px" }}
          onClick={() => changeByBtn("dec")}>
          -
        </Button>
        <Input value={selectedData[type]} onChange={onChange} type="number" />
        <Button
          type="default"
          style={{ width: "40px" }}
          onClick={() => changeByBtn("inc")}>
          +
        </Button>
      </Wrapper.ButtonContainer>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Button type="primary" danger onClick={cancelHandler}>
          Cancel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export default NumberInput;
