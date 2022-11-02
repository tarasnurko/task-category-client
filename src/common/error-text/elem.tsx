import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.p`
  margin: 0;
  color: #cf2a2a;
`;

const elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Elem>{children}</Elem>;
};

export default elem;
