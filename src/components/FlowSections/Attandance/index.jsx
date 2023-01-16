import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
const Attandance = () => {
  const { flowDate, flowID } = useParams();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [data, setData] = useState({});
  const date = new Date(Number(currentDate));
  const dayChangeHandler = (time) => {
    setCurrentDate(time);
  };
  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      data: { flowType: flowID, createDate: currentDate },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);
  return (
    <Wrapper>
      <Title>Attandance</Title>
      <Calendar date={date} onDayChange={dayChangeHandler} />
      <Button style={{ margin: "35px 0" }} type="primary">
        + Add Worker
      </Button>
      <Table data={data} />
      <Button style={{ margin: "35px 0" }}>Go To Count Work</Button>
    </Wrapper>
  );
};

export default Attandance;
