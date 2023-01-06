import React from "react";
import { Wrapper } from "./style";
import logoMain from "../../assets/images/logoMain.jpg";
import { Avatar, Dropdown } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Wrapper.MenuItem>
          <IoMdSettings />
          <Wrapper.MenuItemText>Settings</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}>
          <TbLogout style={{ color: "red" }} />
          <Wrapper.MenuItemText isLogout={true}>Logout</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <Wrapper>
        <Wrapper.Container>
          <Wrapper.Logo src={logoMain} />
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              size="large">
              X
            </Avatar>
          </Dropdown>
        </Wrapper.Container>
      </Wrapper>
      <Outlet />
    </div>
  );
};

export default Navbar;
