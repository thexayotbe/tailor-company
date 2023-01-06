import React from "react";
import { Wrapper } from "./style";
const Card = ({ title, img }) => {
  return (
    <Wrapper>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Img src={img} />
    </Wrapper>
  );
};

export default Card;
