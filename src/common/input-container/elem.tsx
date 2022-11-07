import React, { ReactNode } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 320px;
  position: relative;
`;

const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <InputContainer>{children}</InputContainer>;
};

export default Elem;
