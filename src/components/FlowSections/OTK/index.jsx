import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import TableLoading from "../../Generic/TableLoading";

const OTK = () => {
  const { flowDate, flowID } = useParams();
  const date = new Date(Number(flowDate));
  const [currentDate, setCurrentDate] = useState(flowDate);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otks`,
      method: "POST",
      data: {
        createDate: currentDate,
        flowType: flowID,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      const { data } = res;
      setData(data?.data[0]);
      setIsLoading(false);
    });
  }, [currentDate]);

  const onDateChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };
  const addPr = () => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/otk/add_otk_product`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
        productName: "First Product",
      },
    });
  };
  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} onDayChange={onDateChangeHandler} />
      {isLoading ? <TableLoading count={10} /> : <Table data={data} />}
      <Button type="primary" style={{ margin: "80px 0" }} onClick={addPr}>
        + Add Product
      </Button>
    </Wrapper>
  );
};

export default OTK;
