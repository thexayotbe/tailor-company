import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;
Wrapper.Table = styled.table`
  background-color: rgba(255, 255, 255);
  border-radius: 12px;
`;
Wrapper.Thead = styled.thead``;
Wrapper.Tbody = styled.tbody``;
Wrapper.Tr = styled.tr``;
Wrapper.Td = styled.td`
  margin: 5px 10px;
  padding: 7px 15px;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ defect, count }) =>
    defect ? "#fff1e8" : count ? "#f5feeb" : ""};
  color: ${({ defect, count }) =>
    defect ? "#e57252" : count ? "#429723" : ""};
`;
Wrapper.Th = styled.th`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ defect, count }) =>
    defect ? "#fff1e8" : count ? "#f5feeb" : ""};
  color: ${({ defect, count }) =>
    defect ? "#e57252" : count ? "#429723" : ""};
`;
