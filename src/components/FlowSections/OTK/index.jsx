import React from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";

const OTK = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));
  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default OTK;
