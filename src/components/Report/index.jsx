import React from "react";
import { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles/index";
import Calendar from "../Generic/Calendar";
import OTKReport from "../ReportSections/OTKReport";
import FlowReport from "../ReportSections/FlowReport";
import Store from "../Store";
const Report = () => {
  const [date, setDate] = useState(new Date().getTime());
  return (
    <Wrapper>
      <Title>Report</Title>
      <Calendar
        date={new Date(date)}
        onDayChange={(prefixTime) => setDate(prefixTime)}
      />
      <FlowReport date={date} />
      <OTKReport date={date} />
      <Store disabledFunction={true} />
    </Wrapper>
  );
};

export default Report;
