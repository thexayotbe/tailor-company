import React from "react";
import Card from "../Generic/Card";
import { Wrapper } from "./style";

const Home = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Flows</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card
          title={"Flow 1"}
          img={
            "https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          }
        />
        <Card
          title={"Flow 2"}
          img={
            "https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          }
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          title={"Flow 3"}
          img={
            "https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          }
        />
        <Card
          title={"Flow 4"}
          img={
            "https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          }
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          title={"Flow 5"}
          img={
            "https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          }
        />
      </Wrapper.CardContainer>
      <Wrapper.Title>Store and report</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card
          title={"Store"}
          img={
            "https://previews.123rf.com/images/grgroup/grgroup1310/grgroup131000166/22769908-store-design-over-white-background-vector-illustration.jpg"
          }
        />
        <Card
          title={"Report"}
          img={
            "https://thumbs.dreamstime.com/b/report-icon-vector-isolated-white-background-sign-l-transparent-line-linear-symbol-design-outline-style-133757735.jpg"
          }
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
