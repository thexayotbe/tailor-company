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
Wrapper.Tr = styled.tr`
  background-color: ${({ isAvailable }) => isAvailable && "#fff1e8"};
  color: ${({ isAvailable }) => isAvailable && "#c34221"};
`;
Wrapper.Td = styled.td`
  margin: 5px 10px;
  padding: 7px 15px;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ isAvailable }) => isAvailable && "#fff1e8"};
  color: ${({ isAvailable }) => isAvailable && "#c34221"};
`;
Wrapper.Th = styled.th`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ isAvailable }) => isAvailable && "#fff1e8"};
  color: ${({ isAvailable }) => isAvailable && "#c34221"};
`;
