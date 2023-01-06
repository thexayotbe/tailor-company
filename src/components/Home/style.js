import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0);
  margin: 40px;
  text-align: center;
`;
Wrapper.CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  margin: 30px auto;
  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
