import React from "react";
import styled from "styled-components";

const Elem = styled.div<{ height?: number }>`
  width: 320px;
  height: ${(props) => (props.height ? `${props.height * 4}px` : "48px")};
  background-color: #5a5a5a;
  border-radius: 6px;
`;

const elem: React.FC<{ height?: number }> = ({ height }) => {
  return <Elem height={height} />;
};

export default elem;
