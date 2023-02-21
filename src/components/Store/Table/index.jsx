import { Button } from "antd";
import { TableContainer } from "../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import WarningModal from "../WarnningModal";
import { useState } from "react";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../redux/storeSlice";
const Table = ({
  data,
  disabledFunction,
  deleteProduct,
  deleteStatus,
  saveHandler,
}) => {
  const { selectedData } = useSelector((state) => state.store);
  const [selectedType, setSelectedtype] = useState("");
  const [deleteProductValue, setDeleteProductValue] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [oldValue, setOldValue] = useState({});
  const dispatch = useDispatch();
  const deleteWarning = (value) => {
    setDeleteProductValue(value);
    setDeleteModalOpen(true);
  };
  const doubeleClickHandler = (value, type) => {
    if (selectedType === type && selectedData._id === value._id) return;
    dispatch(setStoreSelectedData(value));
    setSelectedtype(type);
    setOldValue(value);
  };
  const deleteProductHandler = (_id) => {
    deleteProduct(_id);
    setDeleteModalOpen(false);
  };
  const cancelHandler = () => {
    dispatch(setStoreSelectedData({}));
  };

  return (
    <TableContainer>
      <WarningModal
        product={deleteProductValue?.productName}
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={() => deleteProductHandler(deleteProductValue?._id)}
      />
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>
            <TableContainer.Th>Products</TableContainer.Th>
            <TableContainer.Th count>Count Products</TableContainer.Th>
            <TableContainer.Th defect>Sent Products</TableContainer.Th>
            {!disabledFunction && (
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            )}
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() =>
                    doubeleClickHandler(value, "productName")
                  }>
                  {selectedData._id === value._id &&
                  selectedType === "productName" ? (
                    <TextInput
                      cancelHandler={cancelHandler}
                      saveHandler={saveHandler}
                      oldValue={oldValue}
                    />
                  ) : (
                    value.productName
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  count
                  onDoubleClick={() => doubeleClickHandler(value, "things")}>
                  {selectedData._id === value._id &&
                  selectedType === "things" ? (
                    <NumberInput
                      type={selectedType}
                      cancelHandler={cancelHandler}
                      saveHandler={saveHandler}
                      oldValue={oldValue}
                    />
                  ) : (
                    value.things
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  defect
                  onDoubleClick={() =>
                    doubeleClickHandler(value, "sendedThings")
                  }>
                  {selectedData._id === value._id &&
                  selectedType === "sendedThings" ? (
                    <NumberInput
                      type={selectedType}
                      cancelHandler={cancelHandler}
                      saveHandler={saveHandler}
                      oldValue={oldValue}
                    />
                  ) : (
                    value.sendedThings
                  )}
                </TableContainer.Td>
                {!disabledFunction && (
                  <TableContainer.Td isEnd>
                    <Button danger onClick={() => deleteWarning(value)}>
                      Delete
                    </Button>
                  </TableContainer.Td>
                )}
              </TableContainer.Tr>
            );
          })}
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
};

export default Table;
