import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h3<{ size?: number }>`
  margin: 0;
  font-size: ${(props) => (props.size ? `${props.size * 4}px` : "22px")};
`;

const Elem: React.FC<{ children: ReactNode; size?: number }> = ({
  children,
  size,
}) => {
  return <Title size={size}>{children}</Title>;
};

export default Elem;
