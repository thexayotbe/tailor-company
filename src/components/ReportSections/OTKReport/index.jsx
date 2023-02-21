import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Title } from "../../Generic/Styles";
import TableLoading from "./../../Generic/TableLoading";
import axios from "axios";
const OTKReport = ({ date }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_MAIN_URL}/otk/reports/${date}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setIsLoading(false);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <Title>OTK Report</Title>
      {isLoading ? (
        <TableLoading count={5} />
      ) : (
        <Table data={data} date={date} />
      )}
    </div>
  );
};

export default OTKReport;
