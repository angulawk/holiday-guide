import React from "react";

import styled from "styled-components";

import PropTypes from "prop-types";

import { IImageProps } from "UI/atoms/__typings__/Image";

const ImageContainer = styled.img`
  display: block;
`;

const Image = ({
  alt,
  src
}: IImageProps): JSX.Element => (
  <ImageContainer alt={alt} src={src} />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};

export { Image };
