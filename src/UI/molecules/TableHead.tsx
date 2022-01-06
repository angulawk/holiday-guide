import React from "react";

import PropTypes from "prop-types";
import { HeaderGroup } from "react-table";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { TableHeaderCell } from "UI/atoms/TableHeaderCell";
import {
  ITableHeadProps
} from "UI/molecules/__typings__/TableHead";
import { TableRow } from "UI/molecules/TableRow";

const TableHeadContainer = styled.thead`
  ${({
    theme: {
      spacing,
      zIndex: { layer2 }
    }
  }): FlattenSimpleInterpolation => css`
    position: sticky;
    top: ${spacing.spacing0};
    z-index: ${layer2};
  `};
`;

const TableHead = ({
  headerGroups
}: ITableHeadProps): JSX.Element => (
  <TableHeadContainer>
    {headerGroups?.map(
      (
        headerGroup: HeaderGroup<Record<string, string | JSX.Element | unknown>>
      ) => (
        <TableRow
          {...headerGroup?.getHeaderGroupProps()}
          key={headerGroup?.getHeaderGroupProps()?.key}
        >
          {headerGroup?.headers?.map(
            (
              column: HeaderGroup<
                Record<string, string | JSX.Element | unknown>
              >
            ) => (
              <TableHeaderCell
                key={column?.getHeaderProps()?.key}
                width={column?.width}
              >
                {column.render("Header")}
              </TableHeaderCell>
            )
          )}
        </TableRow>
      )
    )}
  </TableHeadContainer>
);

TableHead.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.object).isRequired
};

export { TableHead };
