import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import TableLoading from "../../Generic/TableLoading";
import AddModal from "./AddModal";
import { useSelector } from "react-redux";
const OTK = () => {
  const { flowDate, flowID } = useParams();
  const date = new Date(Number(flowDate));
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { selectedData } = useSelector((state) => state.otk);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteProductValue, setDeleteProductValue] = useState();

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otks`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
      },
    }).then((res) => {
      setLoading(false);
      const { data } = res;
      setData(data?.data[0]);
    });
  }, [currentDate]);

  const onDayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };

  const onAdd = (value) => {
    setData({ ...data, data: [...data.data, value] });
  };
  const updateData = () => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === selectedData._id ? selectedData : value
      ),
    });
  };
  const deleteProduct = ({ _id }) => {
    setData({
      ...data,
      data: data.data.filter((value) => value._id !== _id),
    });
    setDeleteModalOpen(false);
    setDeleteProductValue({});
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/remove`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        idProducts: [_id],
        flowType: flowID,
      },
    });
  };
  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table
          data={data}
          currentDate={currentDate}
          updateData={updateData}
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
          deleteProduct={deleteProduct}
        />
      )}
      <AddModal
        open={addModalOpen}
        onOpen={() => setAddModalOpen(true)}
        onCancel={() => setAddModalOpen(false)}
        createDate={currentDate}
        onAdd={onAdd}
      />
    </Wrapper>
  );
};

export default OTK;
