import React from "react";

import { Input } from "../../common/input";
import { InputContainer } from "../../common/input-container";

interface Props {
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component: React.FC<Props> = ({ value, disabled, onChange }) => {
  return (
    <InputContainer>
      <Input
        name="category-edit"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Component;
