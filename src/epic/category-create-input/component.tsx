import React from "react";

import { Input } from "../../common/input";
import { InputContainer } from "../../common/input-container";
import { Label } from "../../common/label";

interface Props {
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component: React.FC<Props> = ({ value, disabled, onChange }) => {
  return (
    <InputContainer>
      <Label htmlFor="category-create">Category</Label>
      <Input
        name="category-create"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Component;
