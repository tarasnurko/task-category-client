import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
  size?: number;
}

const Elem = styled.label<{ size?: number }>`
  position: absolute;
  top: -20px;
  left: 0;
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.size ? `${props.size * 4}px` : "16px")};
  color: #949494;
`;

const elem: React.FC<LabelProps> = ({ children, size, htmlFor }) => {
  return (
    <Elem size={size} htmlFor={htmlFor}>
      {children}
    </Elem>
  );
};

export default elem;
