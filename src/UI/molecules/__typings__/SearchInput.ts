import { Control } from "react-hook-form";

type TFieldValues = {
  Search: string;
};
export interface ISearchInputProps {
  control: Control<TFieldValues, object>;
}