import { ChangeEvent } from "react";

export interface ICheckboxInputProps {
  checked: boolean;
  dataCy?: string;
  dataTestId?: string;
  disabled?: boolean;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICheckboxVisibleInputProps {
  checked: boolean;
  disabled?: boolean;
}
