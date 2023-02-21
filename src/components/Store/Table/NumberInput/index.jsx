import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setStoreSelectedData } from "../../../../redux/storeSlice";
import { Wrapper } from "./style";

const NumberInput = ({ type, cancelHandler, saveHandler, oldValue }) => {
  const { flowID } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.store);
  const changeHandler = (data) => {
    dispatch(setStoreSelectedData(data));
  };

  const changeByBtn = (funcType) => {
    if (funcType === "inc")
      changeHandler({
        ...selectedData,
        [type]: +selectedData[type] + 1,
      });
    else if (selectedData[type] > 0)
      changeHandler({
        ...selectedData,
        [type]: +selectedData[type] - 1,
      });
  };

  const onChange = (e) => {
    if (e.target.value < 0) changeHandler({ ...selectedData, [type]: 0 });
    else changeHandler({ ...selectedData, [type]: +e.target.value });
  };

  const onSave = () => {
    saveHandler();
    cancelHandler();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/store/update`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        ...selectedData,
      },
    });
  };
  const checkAndAdd = () => {
    oldValue[type] === selectedData[type] ? cancelHandler() : onSave();
  };
  return (
    <Wrapper>
      <Wrapper.ButtonContainer isInput={true}>
        <Button
          type="default"
          danger
          style={{ width: "40px" }}
          onClick={() => changeByBtn("dic")}>
          -
        </Button>
        <Input
          value={selectedData[type]}
          type="number"
          onChange={onChange}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === 13) && checkAndAdd()
          }
        />
        <Button
          type="default"
          style={{ width: "40px" }}
          onClick={() => changeByBtn("inc")}>
          +
        </Button>
      </Wrapper.ButtonContainer>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={checkAndAdd}>
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
