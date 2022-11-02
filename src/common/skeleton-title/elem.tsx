import React from "react";
import styled from "styled-components";

const Elem = styled.div<{ height?: number }>`
  width: 180px;
  height: ${(props) => (props.height ? `${props.height * 4}px` : "22px")};
  background-color: #3b3b3b;
  border-radius: 6px;
`;

const elem: React.FC<{ height?: number }> = ({ height }) => {
  return <Elem height={height} />;
};

export default elem;
