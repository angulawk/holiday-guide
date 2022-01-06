import { Dispatch, SetStateAction } from "react";

export interface ISearchInputProps {
  onChange?: Dispatch<SetStateAction<string>> | ((value: string) => void);
}