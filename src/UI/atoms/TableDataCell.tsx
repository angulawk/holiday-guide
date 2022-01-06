import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ITableDataCellContainerProps,
  ITableDataCellProps
} from "UI/atoms/__typings__/TableDataCell";
import { TSpacing } from "styles/variables/__typings__/variables";

const TableDataCellContainer = styled.td<ITableDataCellContainerProps>`
  ${({
    theme: {
      fontSizes: { font16 },
      spacing
    },
    isLoading,
    lineHeight,
    width
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    border: none;
    font-size: ${font16};
    ${lineHeight &&
    `line-height: ${
      (lineHeight in spacing && spacing[lineHeight as TSpacing]) || lineHeight
    };`}
    position: relative;
    vertical-align: middle;
    word-break: break-all;

    ${!isLoading &&
    `
      padding: ${spacing.spacing8} ${spacing.spacing12};
    `}

    ${width && `width: ${(width in spacing && spacing[width as TSpacing]) || width};`}
  `};
`;

const TableDataCell = ({
  children,
  colSpan = 1,
  isLoading = false,
  lineHeight = "spacing24",
  width
}: ITableDataCellProps): JSX.Element => (
  <TableDataCellContainer
    colSpan={colSpan}
    isLoading={isLoading}
    lineHeight={lineHeight}
    width={width}
  >
    {children}
  </TableDataCellContainer>
);

TableDataCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  colSpan: PropTypes.number,
  isLoading: PropTypes.bool,
  lineHeight: PropTypes.string,
  width: PropTypes.string
};

export { TableDataCell };
