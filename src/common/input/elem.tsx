import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 6px 10px;
  background-color: transparent;
`;

const Elem: React.FC<Props> = ({ name, value, disabled, onChange }) => {
  return (
    <Input name={name} value={value} disabled={disabled} onChange={onChange} />
  );
};

export default Elem;
