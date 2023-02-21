import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  margin: 30px auto;
  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 60%;
    gap: 60px;
  }
  @media (max-width: 550px) {
    width: 100%;
    gap: 100px;
  }
  @media (max-width: 700px) {
    width: 100%;
    gap: 10px;
  }
`;
