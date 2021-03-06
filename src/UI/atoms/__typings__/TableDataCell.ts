export type TTextAlign = "left" | "center" | "right";

export interface ITableDataCellProps {
  children: string | JSX.Element | React.ReactNode;
  colSpan?: number;
  isLoading?: boolean;
  lineHeight?: string;
  width?: string | number;
}

export type ITableDataCellContainerProps = Partial<ITableDataCellProps>;
