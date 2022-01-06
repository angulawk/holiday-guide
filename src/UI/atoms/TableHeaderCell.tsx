import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ITableHeaderCellProps
} from "UI/atoms/__typings__/TableHeaderCell";

import { TSpacing } from "styles/variables/__typings__/variables";

const TableHeaderCellContainer = styled.th<Partial<ITableHeaderCellProps>>`
  ${({
    theme: {
      colorPalette: { blue400, black400 },
      fontSizes: { font20 },
      fontWeights: { medium },
      spacing
    },
    width
  }): FlattenSimpleInterpolation => css`
    background-color: ${blue400};
    border-bottom: 1px solid ${blue400};
    border-top: 1px solid ${blue400};
    color: ${black400};
    font-size: ${font20};
    font-weight: ${medium};
    height: ${spacing.spacing56};
    padding: ${spacing.spacing0} ${spacing.spacing12};
    text-align: left;
    ${width && `width: ${(width in spacing && spacing[width as TSpacing]) || width};`}
  `};
`;

const TableHeaderCell = ({
  children,
  width
}: ITableHeaderCellProps): JSX.Element => (
  <TableHeaderCellContainer
    colSpan={1}
    width={width}
  >
    {children}
  </TableHeaderCellContainer>
);

TableHeaderCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  width: PropTypes.string
};

export { TableHeaderCell };
