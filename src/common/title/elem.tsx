import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.h3<{ size?: number }>`
  margin: 0;
  font-size: ${(props) => (props.size ? `${props.size * 4}px` : "22px")};
`;

const elem: React.FC<{ children: ReactNode; size?: number }> = ({
  children,
  size,
}) => {
  return <Elem size={size}>{children}</Elem>;
};

export default elem;
