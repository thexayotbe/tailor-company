import React, { useState } from "react";
import { Wrapper } from "./style";
import logoMain from "../../assets/images/logoMain.jpg";
import { Avatar, Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import UserModal from "./UserModal";
import SureModal from "./SureModal";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
const Navbar = () => {
  const signOut = useSignOut();
  const user = useAuthUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [sureOpen, setSureOpen] = useState(false);
  const logOut = () => {
    signOut();
    navigate("/login");
  };
  const items = [
    {
      label: (
        <Wrapper.MenuItem onClick={() => setOpen(true)}>
          <SettingOutlined />
          <Wrapper.MenuItemText>Settings</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={() => setSureOpen(true)}>
          <LogoutOutlined style={{ color: "red" }} />
          <Wrapper.MenuItemText isLogout={true}>Logout</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <Wrapper>
        <UserModal open={open} onCancel={() => setOpen(false)} />
        <SureModal
          open={sureOpen}
          onOk={() => logOut()}
          onCancel={() => setSureOpen(false)}
        />
        <Wrapper.Container>
          <Wrapper.Logo src={logoMain} onClick={() => navigate("/")} />
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              size="large">
              {user().fullName[0]}
            </Avatar>
          </Dropdown>
        </Wrapper.Container>
      </Wrapper>
      <Outlet />
    </div>
  );
};

export default Navbar;
