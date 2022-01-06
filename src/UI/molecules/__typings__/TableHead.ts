import { HeaderGroup } from "react-table";

export interface ITableHeadProps {
  headerGroups: HeaderGroup<Record<string, string | JSX.Element | unknown>>[];
}
