import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import { flowData } from "../../utils/flowData";
import { Title } from "../Generic/Styles";
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
        <Card
          title={"Store"}
          img={
            "https://img.freepik.com/premium-vector/shop-building-flat-decorative-icons-isolated-vector-illustration_44074-6050.jpg?w=826"
          }
        />
        <Card
          title={"Report"}
          img={
            "https://img.freepik.com/free-vector/clipboard-with-statistics-report-document-paper_3446-311.jpg?w=740&t=st=1673243548~exp=1673244148~hmac=7595dab024cd4384ecec4aa0b57c1aa3f803ff6019801b4db0bf22bb72f2b02c"
          }
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
