import React, { useState } from "react";
import { Wrapper } from "./style";
import logoMain from "../../assets/images/logoMain.jpg";
import { Avatar, Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useAuthUser, useSignOut } from "react-auth-kit";
import UserModal from "./UserModal";

const Navbar = () => {
  const signOut = useSignOut();
  const user = useAuthUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: (
        <Wrapper.MenuItem onClick={() => setOpen(true)}>
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
            signOut();
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
        <UserModal open={open} onCancel={() => setOpen(false)} />
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
