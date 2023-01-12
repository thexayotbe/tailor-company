import React from "react";
import { Wrapper } from "./style";
import { Modal } from "antd";
const SureModal = ({ open, onOk, onCancel }) => {
  return (
    <Wrapper>
      <Modal title="Are sure" open={open} onOk={onOk} onCancel={onCancel}>
        <p>If you will click OK button you will log out from Web-page...</p>
      </Modal>
    </Wrapper>
  );
};

export default SureModal;
