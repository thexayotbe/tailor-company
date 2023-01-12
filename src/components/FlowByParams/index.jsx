import React from "react";
import { Wrapper } from "./style";
import { useParams } from "react-router-dom";
import Card from "../Generic/Card";
import { Title } from "../Generic/Styles";
const Flow = () => {
  const { flowID } = useParams();
  return (
    <Wrapper>
      <Title>Flow {flowID}</Title>
      <Wrapper.Container>
        <Card
          title="Attandance"
          img="https://img.freepik.com/free-photo/3d-illustration-hand-putting-tick-paper_107791-15903.jpg?w=740&t=st=1673207870~exp=1673208470~hmac=1e7ac5d72557dab080478a2bae3d62432cfe019d08186f829f46edcf2e4b23ae"
          isFlow={true}
        />
        <Card
          title="Count Work"
          img="https://img.freepik.com/premium-photo/kanban-3d-render-icon-illustration_726846-3013.jpg?w=740"
          isFlow={true}
        />
        <Card
          title="OTK"
          img="https://img.freepik.com/premium-photo/data-3d-render-icon-illustration_726846-973.jpg?w=740"
          isFlow={true}
        />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Flow;
