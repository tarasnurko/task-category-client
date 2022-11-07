import React, { ReactNode } from "react";
import styled from "styled-components";

const Conatainer = styled.div<{ gap?: number }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? `${props.gap * 4}px` : "12px")};
`;

const Elem: React.FC<{ children: ReactNode; gap?: number }> = ({
  children,
  gap,
}) => {
  return <Conatainer gap={gap}>{children}</Conatainer>;
};

export default Elem;
