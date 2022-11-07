import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
  size?: number;
}

const Label = styled.label<{ size?: number }>`
  position: absolute;
  top: -20px;
  left: 0;
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.size ? `${props.size * 4}px` : "16px")};
  color: #949494;
`;

const Elem: React.FC<Props> = ({ children, size, htmlFor }) => {
  return (
    <Label size={size} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};

export default Elem;
