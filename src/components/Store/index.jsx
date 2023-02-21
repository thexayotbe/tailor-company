import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import axios from "axios";
import TableLoading from "../Generic/TableLoading";
import AddModal from "./AddModal";
import { setStoreSelectedData } from "../../redux/storeSlice";
import { useDispatch, useSelector } from "react-redux";
const Store = ({ disabledFunction }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.store);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setIsLoading(false);
      setData(res?.data?.data);
    });
  }, []);
  const addHandler = (newData) => {
    setData([...data, newData]);
  };
  const deleteHandler = (_id) => {
    setData(data.filter((value) => value._id !== _id));
  };
  const deleteProduct = (_id) => {
    deleteHandler(_id);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/store/delete`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        _id,
      },
    });
  };
  const saveHandler = () => {
    setData(
      data.map((value) =>
        value._id === selectedData._id ? selectedData : value
      )
    );
    dispatch(setStoreSelectedData({}));
  };
  return (
    <Wrapper>
      <Title>Store</Title>
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table
          data={data}
          disabledFunction={disabledFunction}
          deleteProduct={deleteProduct}
          deleteStatus={deleteStatus}
          saveHandler={saveHandler}
        />
      )}
      {!disabledFunction &&
        (isLoading ? (
          <Button disabled style={{ margin: "30px 0" }}>
            + Add Product{" "}
          </Button>
        ) : (
          <Button
            type="primary"
            style={{ margin: "30px 0" }}
            onClick={() => setIsOpen(true)}>
            + Add Product{" "}
          </Button>
        ))}

      <AddModal
        isOpen={isOpen}
        cancel={() => setIsOpen(false)}
        addHandler={addHandler}
      />
    </Wrapper>
  );
};

export default Store;
