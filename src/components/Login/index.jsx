import React from "react";
import { Wrapper } from "./style";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ShapeSvg from "../Generic/ShapeSVG";
import axios from "axios";
import e from "cors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ fullName: "", password: "" });
  const [loadingStatus, setLoadingStatus] = useState(false);
  const navigate = useNavigate();
  const openNotification = (
    type,
    title,
    description,
    placement = "topRight"
  ) => {
    notification[type]({
      message: title || "No title",
      description: description,
      duration: 5,
      placement,
    });
  };
  const onChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  const authUser = () => {
    if (!loginData.password || !loginData.fullName) {
      openNotification(
        "error",
        "Name or password is wrong",
        "Check your password and email"
      );
      return;
    }
    setLoadingStatus(true);

    axios
      .post(`${process.env.REACT_APP_MAIN_URL}/user/login`, {
        ...loginData,
      })
      .then((responseData) => {
        setLoadingStatus(false);
        const { data } = responseData.data;
        localStorage.setItem(`token`, data.token);
        localStorage.setItem(`isAuthed`, true);
        navigate("/ ");
        openNotification("success", "You logged in successfully");
      })
      .catch((error) => {
        openNotification(
          "error",
          error.response.data.message.toUpperCase(),
          error.response.data.extraMessage
        );
        setLoadingStatus(false);
      });
  };
  return (
    <div>
      <Wrapper>
        <Wrapper.LeftContainer>
          <ShapeSvg
            top={0}
            right={0}
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
          />
          <Wrapper.LeftContainer.Background />
          <ShapeSvg
            bottom={0}
            left={0}
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
          />
        </Wrapper.LeftContainer>
        <Wrapper.RightContainer>
          <Wrapper.RightContainer.Form>
            <Wrapper.RightContainer.Form.Logo src={logo} />
            <Wrapper.RightTitle>И снова здравствуйте!</Wrapper.RightTitle>
            <Wrapper.RightDescription>
              Каждый день мы стараемся шить с лучшими для вас 😊. Vizzano с вами
              более 10 лет. 😎 🙃
            </Wrapper.RightDescription>
            <Wrapper.Input
              placeholder="Email"
              name="fullName"
              onChange={(e) => onChange(e)}
              value={loginData.name}
            />
            <Wrapper.PasswordInput
              placeholder="Password"
              name="password"
              onChange={(e) => onChange(e)}
              value={loginData.password}
            />
            <Wrapper.LoginBtn onClick={authUser}>
              {loadingStatus ? <LoadingOutlined /> : "Login"}
            </Wrapper.LoginBtn>
          </Wrapper.RightContainer.Form>
        </Wrapper.RightContainer>
      </Wrapper>
    </div>
  );
};

export default Login;
