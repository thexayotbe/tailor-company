import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
const Store = () => {
  const [data, setData] = useState([
    { id: 0, product: "Kastyum", count: 145, sent: 0 },
    { id: 1, product: "Kambinezon", count: 205, sent: 0 },
    { id: 2, product: "Kurtka", count: 100, sent: 0 },
  ]);
  return (
    <Wrapper>
      <Title>Store</Title>
      <Table data={data} />

      <Button type="primary" style={{ margin: "30px 0" }}>
        + Add Product{" "}
      </Button>
    </Wrapper>
  );
};

export default Store;
