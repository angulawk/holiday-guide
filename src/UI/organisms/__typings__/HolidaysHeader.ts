import { Control } from "react-hook-form";
import { TFieldValues } from "UI/molecules/__typings__/Checkbox";

export interface IHolidaysHeaderProps {
  alt: string;
  control: Control<TFieldValues, object>;
  countryName: string;
  imageSrc: string;
  isLoading: boolean;
  isCheckboxLoading: boolean;
  onClick: () => void;
}