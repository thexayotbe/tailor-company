import React, { useState } from "react";
import Table from "./Table";
import { Title } from "../../Generic/Styles";
const OTKReport = ({ date }) => {
  const [data, setData] = useState([
    { id: 0, name: "OTK № 1", data: { things: 0, fake: 0 } },
    { id: 1, name: "OTK № 2", data: { things: 0, fake: 0 } },
    { id: 2, name: "OTK № 3", data: { things: 0, fake: 0 } },
    { id: 3, name: "OTK № 4", data: { things: 0, fake: 0 } },
    { id: 4, name: "OTK № 5", data: { things: 0, fake: 0 } },
  ]);
  return (
    <div>
      <Title>OTK Report</Title>
      <Table data={data} date={date} />
    </div>
  );
};

export default OTKReport;
