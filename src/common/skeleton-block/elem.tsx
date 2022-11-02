import React from "react";
import styled from "styled-components";

const Elem = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? `${props.width * 4}px` : "20px")};
  height: ${(props) => (props.height ? `${props.height * 4}px` : "20px")};
  background-color: #676767;
  border-radius: 6px;
`;

const elem: React.FC<{ width?: number; height?: number }> = ({
  width,
  height,
}) => {
  return <Elem width={width} height={height} />;
};

export default elem;
