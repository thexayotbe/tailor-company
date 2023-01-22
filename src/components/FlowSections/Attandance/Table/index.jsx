import React, { useEffect, useState } from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import axios from "axios";
const Table = ({ data: propData, flowType, createDate }) => {
  const [data, setData] = useState(propData);
  const [toggleChange, setToggleChange] = useState(false);
  const updateById = (shouldUpdateData) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shouldUpdateData._id
          ? { ...value, isCome: !value.isCome }
          : value
      ),
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      data: {
        flowType,
        createDate: createDate.getTime(),
        _id: data?._id,
        shoudUpdateData: shouldUpdateData,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  useEffect(
    () =>
      setData({
        ...data,
        isAllCome: data?.data?.every((value) => value.isCome),
      }),
    [toggleChange]
  );
  const updateAll = (isAllCome) => {
    setData({
      ...data,
      data: data.data.map((value) => {
        return { ...value, isCome: isAllCome };
      }),
      isAllCome,
    });

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      data: {
        flowType,
        createDate: createDate.getTime(),
        isAllCome: isAllCome,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>
            <TableContainer.Th>
              <Checkbox
                checked={data?.isAllCome}
                onChange={(e) => updateAll(e.target.checked)}
              />
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
                  <Checkbox
                    checked={value?.isCome}
                    onChange={() => {
                      setToggleChange(!toggleChange);
                      updateById({ ...value, isCome: !value.isCome });
                    }}
                  />
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
