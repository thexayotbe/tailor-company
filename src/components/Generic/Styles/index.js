import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0);
  margin: 40px;
  text-align: center;
`;

Wrapper.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;
Wrapper.Label = styled.div``;
Wrapper.Input = styled(Input)``;
