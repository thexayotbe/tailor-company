import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

Wrapper.Container = styled.div`
  width: 70%;
  column-gap: 100px;
  row-gap: 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;
