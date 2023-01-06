import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
`;
Wrapper.Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
Wrapper.Logo = styled.img`
  height: 50px;
  width: 150px;
  cursor: pointer;
`;
Wrapper.MenuItem = styled.div`
  display: flex;
  font-size: 18px;
  gap: 20px;
  align-items: center;
`;
Wrapper.MenuItemText = styled.div`
  color: ${({ isLogout }) => (isLogout ? "red" : "#000")};
`;
