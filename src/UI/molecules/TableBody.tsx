import React from "react";

import PropTypes from "prop-types";
import { Cell, Row } from "react-table";
import styled from "styled-components";

import { ITableDataCellProps } from "UI/atoms/__typings__/TableDataCell";
import { TableDataCell } from "UI/atoms/TableDataCell";
import { ITableBodyProps } from "UI/molecules/__typings__/TableBody";
import { TableNoResults } from "UI/molecules/TableNoResults";
import { TableRow } from "UI/molecules/TableRow";

const TableBodyContainer = styled.tbody`
  width: 100%;
`;

const emptyArray = new Array(20);

const TableBody = ({
  isLoading = false,
  numberOfColumns = 1,
  noResultsText,
  onRowClick,
  prepareRow,
  rows
}: ITableBodyProps): JSX.Element => {
  if (isLoading) {
    return (
      <TableBodyContainer>
        {emptyArray?.fill(undefined).map((_, index) => (
          <TableRow
            key={index}
            isEven={index % 2 !== 0}
            isLoading={isLoading}
            isVisible={!isLoading}
            numberOfColumns={numberOfColumns}
          />
        ))}
      </TableBodyContainer>
    );
  }

  return (
    <TableBodyContainer>
      {rows?.length === 0 ? (
        <TableRow>
          <TableNoResults
            colSpan={numberOfColumns}
            noResultsText={noResultsText}
          />
        </TableRow>
      ) : (
        rows?.map(
          (row: Row<Record<string, string | JSX.Element | unknown>>) => {
            prepareRow(row);

            const rowOriginal = row?.original;
            const alpha2Code = rowOriginal?.alpha2Code as string;

            return (      
              <TableRow
                key={row?.getRowProps()?.key}
                numberOfColumns={numberOfColumns}
                onClick={() => onRowClick(alpha2Code)}
              >
                {row?.cells?.map(
                  (
                    cell: Cell<Record<string, string | JSX.Element | unknown>>
                  ) => {
                    const cellColumn = cell?.column as unknown as Record<
                      string,
                      unknown
                    >;

                    return (
                      <TableDataCell
                        key={cell?.getCellProps()?.key}
                        lineHeight={
                          cellColumn?.lineHeight as ITableDataCellProps["lineHeight"]
                        }
                        width={cell?.column?.width}
                      >
                        {cell?.render("Cell")}
                      </TableDataCell>
                    );
                  }
                )}
              </TableRow>
            );
          }
        )
      )}
    </TableBodyContainer>
  );
};

TableBody.propTypes = {
  isLoading: PropTypes.bool,
  noResultsText: PropTypes.string.isRequired,
  numberOfColumns: PropTypes.number,
  prepareRow: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export { TableBody };
