import { Column } from "react-table";

export interface ITableProps {
  columns: Column<Record<string, unknown>>[];
  data: Record<string, string | JSX.Element | unknown>[];
  isLoading?: boolean;
  noResultsText?: string;
}