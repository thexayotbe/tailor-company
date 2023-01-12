import React from "react";
import { Wrapper } from "./style";
const Card = ({ title, img, onClick, isFlow }) => {
  return (
    <Wrapper onClick={onClick} isFlow={isFlow}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Img src={img} />
    </Wrapper>
  );
};

export default Card;
