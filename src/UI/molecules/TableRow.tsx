import React from "react";

import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { colorPalette } from "styles/variables/colorPalette";

import { TableDataCell } from "UI/atoms/TableDataCell";
import { ITableRowProps } from "UI/molecules/__typings__/TableRow";

const TableRowContainer = styled.tr<Partial<ITableRowProps>>`
  ${({
    isLoading,
    theme: {
      colorPalette: { blue400, black400 },
      spacing: {  spacing48 }
    }
  }): FlattenSimpleInterpolation => css`
    color: ${black400};
    height: ${spacing48};
    ${isLoading && "width: 100%;"}

    &:nth-child(even) {
      background-color: ${blue400};
    }
  `};
`;

const TableRow = ({
  children,
  isEven = false,
  isLoading = false,
  isVisible = true,
  numberOfColumns
}: ITableRowProps): JSX.Element => (
  <TableRowContainer
    isLoading={isLoading}
  >
    {renderTableRowContent({
      children,
      isEven,
      isLoading,
      isVisible,
      numberOfColumns
    })}
  </TableRowContainer>
);

function renderTableRowContent({
  children,
  isEven,
  isLoading,
  isVisible,
  numberOfColumns
}: ITableRowProps) {
  if (isLoading && isEven) {
    return (
      <TableDataCell
        {...(numberOfColumns && {
          colSpan: numberOfColumns
        })}
        isLoading={isLoading}
      >
        <ContentLoader
          backgroundColor={colorPalette.blue200}
          foregroundColor={colorPalette.blue400}
          foregroundOpacity={0.75}
          gradientRatio={0.5}
          height={44}
          speed={1}
          style={{
            display: "block",
            height: "100%",
            left: "0",
            top: "0",
            width: "100%"
          }}
          title="Loading, please wait..."
        >
          <rect
            id="content-loader-rect"
            x="0"
            y="0"
            rx="0"
            ry="0"
            width="100%"
            height="44"
          />
        </ContentLoader>
      </TableDataCell>
    );
  } else if (isLoading && !isEven) {
    return (
      <TableDataCell
        {...(numberOfColumns && {
          colSpan: numberOfColumns
        })}
        isLoading={isLoading}
      >
        <span />
      </TableDataCell>
    );
  } else if (isVisible) {
    return children;
  } else {
    return null;
  }
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]),
  isEven: PropTypes.bool,
  isLoading: PropTypes.bool,
  isVisible: PropTypes.bool,
  numberOfColumns: PropTypes.number
};

export { TableRow };
