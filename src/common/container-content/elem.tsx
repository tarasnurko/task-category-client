import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div<{ gap?: number; width?: number }>`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  gap: ${(props) => (props.gap ? `${props.gap * 4}px` : "40px")};
  width: ${(props) => (props.width ? `${props.width * 4}px` : "320px")};
`;

const Elem: React.FC<{ children: ReactNode; gap?: number; width?: number }> = ({
  children,
  gap,
  width,
}) => {
  return (
    <Container gap={gap} width={width}>
      {children}
    </Container>
  );
};

export default Elem;
