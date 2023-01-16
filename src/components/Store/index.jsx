import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import FLowSectionsModal from "../Generic/FlowSectionsModal";
const Store = () => {
  const [data, setData] = useState([
    { id: 0, product: "Kastyum", count: 145, sent: 0 },
    { id: 1, product: "Kambinezon", count: 205, sent: 0 },
    { id: 2, product: "Kurtka", count: 100, sent: 0 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Wrapper>
      <Title>Store</Title>
      <Table data={data} />
      <FLowSectionsModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      />
      <Button
        type="primary"
        style={{ margin: "30px 0" }}
        onClick={() => setModalOpen(true)}>
        + Add Product{" "}
      </Button>
    </Wrapper>
  );
};

export default Store;
