import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
const Table = ({ data }) => {
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>
              <OrderedListOutlined />
            </Wrapper.Th>
            <Wrapper.Th>
              <Checkbox checked={data?.isAllCome} />
            </Wrapper.Th>
            <Wrapper.Th>Full Name</Wrapper.Th>
            <Wrapper.Th isEnd>Action</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {data?.data?.map((value, index) => {
            return (
              <Wrapper.Tr key={value._id}>
                <Wrapper.Td>{index + 1}</Wrapper.Td>
                <Wrapper.Td>
                  <Checkbox checked={value.isCome} />
                </Wrapper.Td>
                <Wrapper.Td>{value.fullName}</Wrapper.Td>
                <Wrapper.Td isEnd>
                  <Button danger>Delete</Button>
                </Wrapper.Td>
              </Wrapper.Tr>
            );
          })}
        </Wrapper.Tbody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export default Table;
