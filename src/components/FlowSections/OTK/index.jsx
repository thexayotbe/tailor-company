import { Button } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import FLowSectionsModal from "../../Generic/FlowSectionsModal";
const OTK = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));
  const [data, setData] = useState([
    { id: 0, product: "Suit", count: 0, defect: 0 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} />
      <Table data={data} />
      <FLowSectionsModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      />
      <Button
        type="primary"
        style={{ margin: "80px 0" }}
        onClick={() => setModalOpen(true)}>
        + Add Product
      </Button>
    </Wrapper>
  );
};

export default OTK;
