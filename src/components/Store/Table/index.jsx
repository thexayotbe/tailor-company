import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import { Wrapper } from "../../FlowSections/OTK/Table/style";
import { OrderedListOutlined } from "@ant-design/icons";
const Table = ({ data }) => {
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>
              <OrderedListOutlined />
            </Wrapper.Th>
            <Wrapper.Th>Products</Wrapper.Th>
            <Wrapper.Th count>Count</Wrapper.Th>
            <Wrapper.Th defect>Defect</Wrapper.Th>
            <Wrapper.Th isEnd>Action</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {data.map((value, index) => {
            return (
              <Wrapper.Tr key={value.id}>
                <Wrapper.Td>{index + 1}</Wrapper.Td>
                <Wrapper.Td>{value.product}</Wrapper.Td>
                <Wrapper.Td count>{value.count}</Wrapper.Td>
                <Wrapper.Td defect> {value.sent}</Wrapper.Td>
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
