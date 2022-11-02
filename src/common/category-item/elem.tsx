import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.div`
  margin: 0;
  padding: 4px 10px;
  border: 1px solid #894444;
  border-radius: 6px;
`;

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const component: React.FC<Props> = ({ children, onClick }) => {
  return <Elem onClick={onClick}>{children}</Elem>;
};

export default component;
