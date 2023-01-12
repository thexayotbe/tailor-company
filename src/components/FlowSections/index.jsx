import React from "react";
import { useParams } from "react-router-dom";
import Attandance from "./Attandance";
import OTK from "./OTK";
import Count_Work from "./Work count";

const FlowSection = () => {
  const sections = [
    { id: 0, Component: Attandance, name: "attandance" },
    { id: 1, Component: OTK, name: "otk" },
    { id: 2, Component: Count_Work, name: "count-work" },
  ];
  const { flowSection } = useParams();

  return sections.map(({ id, name, Component }) => {
    return flowSection === name ? <Component key={id} /> : "";
  });
  // <>
  //   <Attandance />
  // </>
};

export default FlowSection;
