import { Control } from "react-hook-form";

type TFieldValues = {
  Search: string | null;
};
export interface ISearchInputProps {
  control: Control<TFieldValues, object>;
}