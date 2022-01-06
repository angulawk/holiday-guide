import React from "react";

import PropTypes from "prop-types";
import { useTable } from "react-table";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { LayoutContainer } from "UI/layout/LayoutContainer";
import { TableBody } from "UI/molecules/TableBody";
import { TableHead } from "UI/molecules/TableHead";
import {
  ITableProps
} from "UI/organisms/__typings__/Table";

const TableContainer = styled.table`
  ${({
    theme: {
      colorPalette: { blue400 }
    }
  }): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${blue400};
    border-left: 1px solid ${blue400};
    border-right: 1px solid ${blue400};
    border-spacing: 0;
    width: 100%;
  `};
`;

function Table({
  columns,
  data,
  isLoading = false,
  noResultsText = "No results found"
}: ITableProps): JSX.Element {
  const tableInstance = useTable({
    columns,
    data
  });

  const numberOfColumns: number = columns?.length;

  const { getTableProps, headerGroups, rows, prepareRow } = tableInstance;

  const { ...tableProps } = getTableProps();

  return (
    <LayoutContainer paddingBottom="spacing2">
      <TableContainer
        {...tableProps}
      >
        <TableHead
          headerGroups={headerGroups}
        />
        <TableBody
          isLoading={isLoading}
          noResultsText={noResultsText}
          numberOfColumns={numberOfColumns}
          prepareRow={prepareRow}
          rows={rows}
        />
      </TableContainer>
    </LayoutContainer>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  noResultsText: PropTypes.string
};

export { Table };