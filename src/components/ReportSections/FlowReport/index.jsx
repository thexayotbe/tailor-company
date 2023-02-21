import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Title } from "../../Generic/Styles";
import axios from "axios";
import TableLoading from "../../Generic/TableLoading";
const FlowReport = ({ date }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/report/${date}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setIsLoading(false);
      setData(res.data.data);
    });
  }, [date]);
  return (
    <div>
      <Title>Flow Report</Title>
      {isLoading ? (
        <TableLoading count={5} />
      ) : (
        <Table data={data} date={date} />
      )}
    </div>
  );
};

export default FlowReport;
