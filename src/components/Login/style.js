import styled from "styled-components";
import tailorman from "../../assets/images/tailorman.jpg";
import { Input } from "antd";
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

Wrapper.LeftContainer = styled.div`
  flex: 1;
  background-color: #2f67cc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1000px) {
    display: none;
  }
`;
Wrapper.LeftContainer.Background = styled.div`
  z-index: 2;
  background-image: url(${tailorman});
  width: 70%;
  height: 70%;
  background-size: cover;
  background-position: center center;
  border-radius: 12px;
`;
Wrapper.RightContainer = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

Wrapper.RightContainer.Form = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
Wrapper.RightContainer.Form.Logo = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid #f3f5f8;
  border-radius: 50%;
`;
Wrapper.RightTitle = styled.h3`
  font-size: 30px;
  color: rgb(57, 56, 77);
`;
Wrapper.RightDescription = styled.p`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 60%;
`;
Wrapper.Input = styled(Input)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.PasswordInput = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.LoginBtn = styled.button`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: rgb(48, 104, 204);
  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
