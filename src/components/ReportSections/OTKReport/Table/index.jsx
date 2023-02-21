import { Button } from "antd";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { Wrapper } from "../style";
import { useNavigate } from "react-router-dom";

const Table = ({ data, date }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TableContainer>
        <TableContainer.Table>
          <TableContainer.Thead>
            <TableContainer.Tr>
              <TableContainer.Th>
                <OrderedListOutlined />
              </TableContainer.Th>
              <TableContainer.Th>Name OTK</TableContainer.Th>
              <TableContainer.Th count>Count </TableContainer.Th>
              <TableContainer.Th defect>Fake</TableContainer.Th>
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            </TableContainer.Tr>
          </TableContainer.Thead>
          <TableContainer.Tbody>
            {data?.map((value, index) => {
              return (
                <TableContainer.Tr key={index}>
                  <TableContainer.Td>{index + 1}</TableContainer.Td>
                  <TableContainer.Td>{value.name}</TableContainer.Td>
                  <TableContainer.Td count>{value.data.fake}</TableContainer.Td>
                  <TableContainer.Td defect>
                    {value.data.things}
                  </TableContainer.Td>
                  <TableContainer.Td isEnd>
                    <Button type="primary">See with details</Button>
                  </TableContainer.Td>
                </TableContainer.Tr>
              );
            })}
          </TableContainer.Tbody>
        </TableContainer.Table>
      </TableContainer>
    </Wrapper>
  );
};

export default Table;
