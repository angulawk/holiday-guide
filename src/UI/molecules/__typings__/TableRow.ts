export interface ITableRowProps {
  children?: string | number | JSX.Element | JSX.Element[] | React.ReactNode;
  isEven?: boolean;
  isLoading?: boolean;
  isVisible?: boolean;
  numberOfColumns?: number;
}
