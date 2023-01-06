import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: fit-content;
  height: fit-content;
  display: flex;
  border-radius: 17px;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 25%) 6px 6px 7px;
  padding: 10px 50px;
  gap: 20px;
  @media (max-width: 900px) {
    padding: 10px 20px;
  }
`;

Wrapper.Title = styled.div`
  text-align: center;
  font-size: 26px;
  @media (max-width: 1100px) {
    font-size: 23px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
Wrapper.Img = styled.img`
  width: 133px;
  height: 192px;
  @media (max-width: 1100px) {
    width: 113;
    height: 152px;
  }
  @media (max-width: 900px) {
    width: 83;
    height: 132px;
  }
`;
