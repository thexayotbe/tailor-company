import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import { Wrapper } from "./style";
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

            <Wrapper.Th>Full Name</Wrapper.Th>
            <Wrapper.Th isAvailable>Defect</Wrapper.Th>
            <Wrapper.Th isEnd>Total</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {data?.map((value, index) => {
            return (
              <Wrapper.Tr isAvailable key={value.id}>
                <Wrapper.Td>{index + 1}</Wrapper.Td>
                <Wrapper.Td>{value.fullName}</Wrapper.Td>
                <Wrapper.Td isAvailable>{value.defect}</Wrapper.Td>
                <Wrapper.Td>{value.total}</Wrapper.Td>
              </Wrapper.Tr>
            );
          })}
        </Wrapper.Tbody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export default Table;
