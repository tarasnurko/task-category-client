import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap * 4}px` : "12px")};
`;

const Elem: React.FC<{ children: ReactNode | ReactNode[]; gap?: number }> = ({
  children,
  gap,
}) => {
  return <Container gap={gap}>{children}</Container>;
};

export default Elem;
