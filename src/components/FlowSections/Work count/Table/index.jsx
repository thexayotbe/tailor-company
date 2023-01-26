import { OrderedListOutlined } from "@ant-design/icons";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
const Table = ({ data }) => {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>

            <TableContainer.Th>Full Name</TableContainer.Th>
            <TableContainer.Th defect={true}>Fake</TableContainer.Th>
            <TableContainer.Th isEnd>Total</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td defect={!value.isCome}>
                  {index + 1}
                </TableContainer.Td>
                <TableContainer.Td defect={!value.isCome}>
                  {value.fullName}
                </TableContainer.Td>
                <TableContainer.Td isAvailable defect={true}>
                  {value.fake}
                </TableContainer.Td>
                <TableContainer.Td defect={!value.isCome}>
                  {" "}
                  {value.price}{" "}
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
