import { Row } from "react-table";

export interface ITableBodyProps {
  isLoading?: boolean;
  noResultsText: string;
  numberOfColumns?: number;
  prepareRow: (
    row: Row<Record<string, string | JSX.Element | unknown>>
  ) => void;
  rows: Row<Record<string, string | JSX.Element | unknown>>[];
}
