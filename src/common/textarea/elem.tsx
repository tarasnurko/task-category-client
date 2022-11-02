import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Elem = styled.textarea`
  margin: 0;
  width: 100%;
  min-height: 90px;
  border-radius: 6px;
  padding: 6px 10px;
  resize: vertical;
  background-color: transparent;
`;

const elem: React.FC<TextareaProps> = ({ name, value, disabled, onChange }) => {
  return (
    <Elem name={name} value={value} disabled={disabled} onChange={onChange} />
  );
};

export default elem;
