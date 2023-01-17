import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
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
            <TableContainer.Th>
              <Checkbox checked={data?.isAllCome} />
            </TableContainer.Th>
            <TableContainer.Th>Full Name</TableContainer.Th>
            <TableContainer.Th isEnd>Action</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td>
                  <Checkbox checked={value.isCome} />
                </TableContainer.Td>
                <TableContainer.Td>{value.fullName}</TableContainer.Td>
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
