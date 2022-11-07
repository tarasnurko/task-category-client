import React, { ReactNode } from "react";
import styled from "styled-components";

const ErrorText = styled.p`
  margin: 0;
  color: #cf2a2a;
`;

const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ErrorText>{children}</ErrorText>;
};

export default Elem;
