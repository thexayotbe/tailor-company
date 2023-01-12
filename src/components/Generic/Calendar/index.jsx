import React from "react";
import { DatePicker } from "antd";
const Calendar = ({ data, onChange }) => {
  const startDate = 1669114067947;
  const setUpDate = new Date();
  const visibleDate = new Date(
    `${setUpDate.getMonth() + 1}/${
      setUpDate.getDate() + 1
    }/${setUpDate.getFullYear()}`
  );
  return (
    <div>
      <DatePicker
        onChange={onChange}
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
    </div>
  );
};

export default Calendar;
