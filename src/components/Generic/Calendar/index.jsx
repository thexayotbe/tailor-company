import React, { useState } from "react";
import { DatePicker } from "antd";
import { Wrapper } from "./style";
import { Title } from "../Styles";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
const Calendar = ({ date }) => {
  const startDate = 1669114067947;
  const setUpDate = new Date();
  const [paramsDate, setParamsDate] = useState(date.getTime());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const visibleDate = new Date(
    `${setUpDate.getMonth() + 1}/${
      setUpDate.getDate() + 1
    }/${setUpDate.getFullYear()}`
  );

  const currentDate = new Date(paramsDate);

  const minusDay = () =>
    setParamsDate(currentDate.setDate(currentDate.getDate() - 1));
  const plusDay = () =>
    setParamsDate(currentDate.setDate(currentDate.getDate() + 1));
  return (
    <Wrapper>
      <BsFillCaretLeftFill
        onClick={minusDay}
        style={{ fontSize: "22px", cursor: "pointer" }}
      />
      <Title onClick={() => setShowDate(false)}>
        {showDate ? (
          currentDate.toLocaleDateString(`ru-RU`, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        ) : (
          <DatePicker
            open={!showDate}
            onOpenChange={() => {
              setShowDate(true);
            }}
            onChange={(e) => {
              setParamsDate(e.$d.getTime());
            }}
            disabledDate={(value) => {
              const antdDate = new Date(value.$d);
              if (
                startDate < antdDate.getTime() &&
                visibleDate.getTime() > antdDate.getTime()
              ) {
                return false;
              }
              return true;
            }}
          />
        )}{" "}
      </Title>
      {Number(
        `${setUpDate.getDate()}.${
          setUpDate.getMonth() + 1
        }${setUpDate.getFullYear()}`
      ) >
      Number(
        `${currentDate.getDate()}.${
          currentDate.getMonth() + 1
        }${currentDate.getFullYear()}`
      ) ? (
        <BsFillCaretRightFill
          onClick={plusDay}
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Calendar;
