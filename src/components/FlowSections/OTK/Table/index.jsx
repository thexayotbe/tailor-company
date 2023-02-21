import { Button } from "antd";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { setOTKSelectedData } from "../../../../redux/otkSlice";
import { useDispatch, useSelector } from "react-redux";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import WarningModal from "../WarnningModal";
import { useState } from "react";
const Table = ({
  data,
  currentDate,
  updateData,
  deleteModalOpen,
  setDeleteModalOpen,
  deleteProduct,
}) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const [deleteProductValue, setDeleteProductValue] = useState();
  const [selectType, setSelectType] = useState("");
  const [oldValue, setOldValue] = useState({});
  const doubleClickHandler = (value, doubleType) => {
    if (selectType === doubleType && value._id === selectedData._id) return;
    dispatch(setOTKSelectedData(value));
    setSelectType(doubleType);
    setOldValue(value);
  };

  const deleteConfirm = (value) => {
    setDeleteProductValue(value);
    setDeleteModalOpen(true);
  };

  const cancelHandler = () => {
    dispatch(setOTKSelectedData({}));
    setSelectType("");
  };
  return (
    <TableContainer>
      <WarningModal
        product={deleteProductValue?.productName}
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={() => deleteProduct(deleteProductValue)}
      />
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
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() =>
                    doubleClickHandler(value, "productName")
                  }>
                  {value._id === selectedData._id &&
                  selectType === "productName" ? (
                    <TextInput
                      oldValue={oldValue}
                      cancelHandler={cancelHandler}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.productName
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() => doubleClickHandler(value, "things")}
                  count>
                  {selectedData._id === value._id && selectType === "things" ? (
                    <NumberInput
                      oldValue={oldValue}
                      cancelHandler={cancelHandler}
                      type={"things"}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.things
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  defect
                  onDoubleClick={() => doubleClickHandler(value, "fake")}>
                  {selectedData._id === value._id && selectType === "fake" ? (
                    <NumberInput
                      oldValue={oldValue}
                      cancelHandler={cancelHandler}
                      type={"fake"}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.fake
                  )}
                </TableContainer.Td>
                <TableContainer.Td isEnd>
                  <Button danger onClick={() => deleteConfirm(value)}>
                    Delete
                  </Button>
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
