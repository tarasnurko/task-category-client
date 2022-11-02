import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.div`
  margin: 0;
  padding: 0;
  width: 320px;
  position: relative;
`;

const elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Elem>{children}</Elem>;
};

export default elem;
