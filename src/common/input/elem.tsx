import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Elem = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 6px 10px;
  background-color: transparent;
`;

const elem: React.FC<InputProps> = ({ name, value, disabled, onChange }) => {
  return (
    <Elem name={name} value={value} disabled={disabled} onChange={onChange} />
  );
};

export default elem;
