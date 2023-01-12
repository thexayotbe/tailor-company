import React from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";

const Count_Work = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));
  return (
    <Wrapper>
      <Title>Count_Work</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default Count_Work;
