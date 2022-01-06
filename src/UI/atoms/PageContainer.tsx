import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { IPageContainerProps } from "UI/atoms/__typings__/PageContainer";

const PageWrapper = styled.div`
  ${({
    theme: {
      spacing: { spacing48, spacing96, spacing1280 }
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 auto;
    max-width: ${spacing1280};
    padding: ${spacing96} ${spacing48};
    width: 100%;
  `};
`;

const PageContainer = ({
  children
}: IPageContainerProps): JSX.Element => (
  <PageWrapper>
    {children}
  </PageWrapper>
);

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node
  ]).isRequired
};

export { PageContainer };
