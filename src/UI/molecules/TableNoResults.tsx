import React from "react";

import PropTypes from "prop-types";

import { TableDataCell } from "UI/atoms/TableDataCell";
import { Text } from "UI/atoms/Text";
import { LayoutContainer } from "UI/layout/LayoutContainer";
import { ITableNoResultsProps } from "UI/molecules/__typings__/TableNoResults";

const TableNoResults = ({
  colSpan,
  noResultsText
}: ITableNoResultsProps): JSX.Element => (
  <TableDataCell
    {...(colSpan && {
      colSpan
    })}
  >
    <LayoutContainer
      alignItems="center"
      display="flex"
      flexFlow="column nowrap"
      justifyContent="center"
      paddingBottom="spacing128"
      paddingTop="spacing128"
    >
      <Text
        fontSize="font32"
        lineHeight="spacing40"
        textAlign="center"
      >
        {noResultsText}
      </Text>
    </LayoutContainer>
  </TableDataCell>
);

TableNoResults.propTypes = {
  colSpan: PropTypes.number.isRequired,
  noResultsText: PropTypes.string.isRequired
};

export { TableNoResults };
