import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import Modal from "./Modal";
import TableLoading from "../../Generic/TableLoading";
const Attandance = () => {
  const navigate = useNavigate();
  const { flowDate, flowID } = useParams();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date(Number(currentDate));
  const [modalOpen, setModalOpen] = useState(false);

  const dayChangeHandler = (time) => {
    setCurrentDate(time);
  };
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      data: { flowType: flowID, createDate: currentDate },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setIsLoading(false);
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);
  const closeModal = () => {
    setModalOpen(false);
  };

  const addHandler = (propData) => {
    setData({ ...data, data: { ...data.data, propData } });
  };

  return (
    <Wrapper>
      <Title>Attandance</Title>
      <Modal
        open={modalOpen}
        closeModalHandler={closeModal}
        onAdd={addHandler}
      />
      <Calendar date={date} onDayChange={dayChangeHandler} />
      <Button
        style={{ margin: "35px 0" }}
        type="primary"
        onClick={() => setModalOpen(true)}>
        + Add Worker
      </Button>
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table data={data} createDate={date} flowType={flowID} />
      )}
      <Button
        style={{ margin: "35px 0" }}
        onClick={() => navigate(`/flow/${flowID}/count-work/${flowDate}`)}>
        Go To Count Work
      </Button>
    </Wrapper>
  );
};

export default Attandance;
