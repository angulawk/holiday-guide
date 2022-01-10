import { Dispatch, SetStateAction } from "react";

export interface ICheckboxProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange?: Dispatch<SetStateAction<boolean>> | ((checked: boolean) => void);
}

export type TCheckboxContainerProps = Partial<ICheckboxProps>;
