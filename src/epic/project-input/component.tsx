import React from "react";

import { Input } from "../../common/input";
import { InputContainer } from "../../common/input-container";
import { Label } from "../../common/label";

interface Props {
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component: React.FC<Props> = ({ disabled, value, onChange }) => {
  return (
    <InputContainer>
      <Label htmlFor="name">Name</Label>
      <Input
        name="name"
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Component;
