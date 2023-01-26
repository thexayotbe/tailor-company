import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import { flowData } from "../../utils/flowData";
import { Title } from "../Generic/Styles";
import store from "../../assets/images/store.png";
import report from "../../assets/images/report.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Flows</Title>
      <Wrapper.CardContainer>
        {flowData.map((value) => {
          return (
            <Card
              key={value.id}
              title={value.title}
              img={value.img}
              onClick={() => navigate(`${value.navigation}`)}
            />
          );
        })}
      </Wrapper.CardContainer>
      <Title>Store and report</Title>
      <Wrapper.CardContainer>
        <Card title={"Store"} img={store} onClick={() => navigate("/store")} />
        <Card
          title={"Report"}
          img={report}
          onClick={() => navigate("/report")}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
