import { Button } from "antd";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
const Table = ({ data }) => {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>
            <TableContainer.Th>Products</TableContainer.Th>
            <TableContainer.Th count>Count</TableContainer.Th>
            <TableContainer.Th defect>Fake</TableContainer.Th>
            <TableContainer.Th isEnd>Action</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                {console.log(value.productName)}
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td>{value.productName}</TableContainer.Td>
                <TableContainer.Td count>{value.things}</TableContainer.Td>
                <TableContainer.Td defect> {value.fake}</TableContainer.Td>
                <TableContainer.Td isEnd>
                  <Button danger>Delete</Button>
                </TableContainer.Td>
              </TableContainer.Tr>
            );
          })}
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
};

export default Table;
