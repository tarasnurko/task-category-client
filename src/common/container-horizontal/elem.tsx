import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.div<{ gap?: number }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? `${props.gap * 4}px` : "12px")};
`;

const elem: React.FC<{ children: ReactNode; gap?: number }> = ({
  children,
  gap,
}) => {
  return <Elem gap={gap}>{children}</Elem>;
};

export default elem;
