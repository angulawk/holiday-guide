import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { IPageContainerProps } from "UI/atoms/__typings__/PageContainer";

const PageContainerWrapper = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint640 },
      spacing: { spacing24, spacing48, spacing80, spacing1280 }
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 auto;
    max-width: ${spacing1280};
    padding: ${spacing80} ${spacing48};
    width: 100%;

    @media(max-width: ${breakpoint640}) {
      padding: ${spacing80} ${spacing24};
    }
  `};
`;

const PageContainer = ({
  children
}: IPageContainerProps): JSX.Element => (
  <PageContainerWrapper>
    {children}
  </PageContainerWrapper>
);

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node
  ]).isRequired
};

export { PageContainer };
