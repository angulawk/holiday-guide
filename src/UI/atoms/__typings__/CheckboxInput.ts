import { ChangeEvent } from "react";

export interface ICheckboxInputProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICheckboxVisibleInputProps {
  checked: boolean;
  disabled?: boolean;
}
