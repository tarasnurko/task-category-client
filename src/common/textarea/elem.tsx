import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = styled.textarea`
  margin: 0;
  width: 100%;
  min-height: 90px;
  border-radius: 6px;
  padding: 6px 10px;
  resize: vertical;
  background-color: transparent;
`;

const Elem: React.FC<Props> = ({ name, value, disabled, onChange }) => {
  return (
    <Textarea
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Elem;
