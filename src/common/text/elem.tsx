import React, { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.p<{ size?: number }>`
  margin: 0;
  font-size: ${(props) => (props.size ? `${props.size * 4}px` : "18px")};
`;

const Elem: React.FC<{ children: ReactNode; size?: number }> = ({
  children,
  size,
}) => {
  return <Text size={size}>{children}</Text>;
};

export default Elem;
