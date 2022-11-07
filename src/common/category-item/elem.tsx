import React, { ReactNode } from "react";
import styled from "styled-components";

const CategoryItem = styled.div<{ active: boolean; editable: boolean }>`
  margin: 0;
  padding: 4px 10px;
  border: 1px solid #894444;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "#ffa962" : "#fff")};
  cursor: ${(props) => (props.editable ? "pointer" : "default")};
`;

interface Props {
  children: ReactNode;
  active?: boolean;
  editable?: boolean;
  onClick?: () => void;
}

const Elem: React.FC<Props> = ({ children, active, editable, onClick }) => {
  return (
    <CategoryItem
      active={active || false}
      editable={editable || false}
      onClick={onClick}
    >
      {children}
    </CategoryItem>
  );
};

export default Elem;
