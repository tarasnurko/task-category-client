import React, { ReactNode } from "react";
import styled from "styled-components";

const Elem = styled.div<{ gap?: number; width?: number }>`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  gap: ${(props) => (props.gap ? `${props.gap * 4}px` : "40px")};
  width: ${(props) => (props.width ? `${props.width * 4}px` : "320px")};
`;

const elem: React.FC<{ children: ReactNode; gap?: number; width?: number }> = ({
  children,
  gap,
  width,
}) => {
  return (
    <Elem gap={gap} width={width}>
      {children}
    </Elem>
  );
};

export default elem;
