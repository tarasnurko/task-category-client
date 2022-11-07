import React from "react";
import { CategoryItem } from "../../common/category-item";
import { ContainerHorizontal } from "../../common/container-horizontal";
import { CATEGORY_LIST } from "../../data/category";

const Component: React.FC<{
  list: CATEGORY_LIST;
  activeCategory: number | null;
  onActive: (id: number) => void;
}> = ({ list, activeCategory, onActive }) => {
  return (
    <ContainerHorizontal>
      {list.map((category) => (
        <CategoryItem
          key={category.id}
          active={activeCategory === category.id ? true : false}
          onClick={() => onActive(category.id)}
        >
          {category.text}
        </CategoryItem>
      ))}
    </ContainerHorizontal>
  );
};

export default Component;
