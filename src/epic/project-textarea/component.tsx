import React from "react";

import { InputContainer } from "../../common/input-container";
import { Label } from "../../common/label";
import { Textarea } from "../../common/textarea";

interface Props {
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Component: React.FC<Props> = ({ value, disabled, onChange }) => {
  return (
    <InputContainer>
      <Label htmlFor="text">Text</Label>
      <Textarea
        name="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Component;
