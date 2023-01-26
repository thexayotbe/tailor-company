import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import TableLoading from "../../Generic/TableLoading";
const Count_Work = () => {
  const navigate = useNavigate();
  const { flowDate, flowID } = useParams();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date(Number(flowDate));
  const [data, setData] = useState([
    { id: 0, fullName: "Mamajonov Xayotbek", defect: 0, total: 0 },
    { id: 1, fullName: "Alisherov Hamidilloh", defect: 0, total: 0 },
    { id: 2, fullName: "Ortiqjanov Abdullahad", defect: 0, total: 0 },
  ]);
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: { flowType: flowID, createDate: currentDate },
    }).then((res) => {
      setIsLoading(false);
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);
  const dayChangeHandler = (time) => {
    setCurrentDate(time);
  };
  return (
    <Wrapper>
      <Title>Count Work</Title>
      <Calendar date={date} onDayChange={dayChangeHandler} />
      {isLoading ? <TableLoading count={10} /> : <Table data={data} />}
      <Button
        style={{ margin: "35px" }}
        onClick={() => navigate(`/flow/${flowID}/attandance/${flowDate}`)}>
        {" "}
        Go to attandance
      </Button>
    </Wrapper>
  );
};

export default Count_Work;
