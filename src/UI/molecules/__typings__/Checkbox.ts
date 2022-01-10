import { Control } from "react-hook-form";

export type TFieldValues = {
  NonPublicHolidays: boolean;
  PublicHolidays: boolean;
};

export interface ICheckboxProps {
  control: Control<TFieldValues, object>;
  disabled?: boolean;
  label: string;
  name: "NonPublicHolidays" | "PublicHolidays";
}

export type TCheckboxContainerProps = Partial<ICheckboxProps>;
