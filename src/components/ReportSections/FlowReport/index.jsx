import React, { useState } from "react";
import Table from "./Table";
import { Title } from "../../Generic/Styles";
const FlowReport = ({ date }) => {
  const [data, setData] = useState([
    { id: 0, name: "FLow 1", data: { price: 0, fake: 0, things: 0 } },
    { id: 1, name: "FLow 2", data: { price: 0, fake: 0, things: 0 } },
    { id: 2, name: "FLow 3", data: { price: 0, fake: 0, things: 0 } },
    { id: 3, name: "FLow 4", data: { price: 0, fake: 0, things: 0 } },
    { id: 4, name: "FLow 5", data: { price: 0, fake: 0, things: 0 } },
  ]);
  return (
    <div>
      <Title>Flow Report</Title>
      <Table data={data} date={date} />
    </div>
  );
};

export default FlowReport;
