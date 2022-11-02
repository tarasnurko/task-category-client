import React, { ReactNode } from "react";
import styled from "styled-components";
import { BUTTON_TYPE } from "./constants";

const btnBgColor = (btnType: BUTTON_TYPE): string =>
  btnType === BUTTON_TYPE.CREATE
    ? "#0071aa"
    : btnType === BUTTON_TYPE.EDIT
    ? "#e2d706"
    : btnType === BUTTON_TYPE.SAVE
    ? "#83e930"
    : btnType === BUTTON_TYPE.DELETE
    ? "#bd1b1b"
    : "unset";

const btnTextColor = (btnType: BUTTON_TYPE): string =>
  btnType === BUTTON_TYPE.CREATE
    ? "#ffffff"
    : btnType === BUTTON_TYPE.EDIT
    ? "#000000"
    : btnType === BUTTON_TYPE.SAVE
    ? "#000000"
    : btnType === BUTTON_TYPE.DELETE
    ? "#ffffff"
    : "unset";

const Elem = styled.button<{ btnType: BUTTON_TYPE }>`
  margin: 0;
  padding: 10px 18px;
  background-color: ${(props) => btnBgColor(props.btnType)};
  color: ${(props) => btnTextColor(props.btnType)};
  font-size: 16px;
  border-radius: 6px;
`;

const elem: React.FC<{
  children?: ReactNode;
  btnType: BUTTON_TYPE;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, btnType, onClick, disabled }) => {
  return (
    <Elem btnType={btnType} onClick={onClick} disabled={disabled}>
      {children}
    </Elem>
  );
};

export default elem;
