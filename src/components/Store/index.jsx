import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import axios from "axios";
import TableLoading from "../Generic/TableLoading";
const Store = ({ disabledFunction }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setIsLoading(false);

      setData(res?.data?.data);
    });
  }, []);
  return (
    <Wrapper>
      <Title>Store</Title>
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table data={data} disabledFunction={disabledFunction} />
      )}
      {!disabledFunction && (
        <Button type="primary" style={{ margin: "30px 0" }}>
          + Add Product{" "}
        </Button>
      )}
    </Wrapper>
  );
};

export default Store;
