import React from "react";
import styled from "styled-components/primitives";

import { Platform } from "react-native";

const StyledWidth700 = styled.View`
  margin: 0 auto;
  padding: 0 20px;
  ${Platform.OS === "web"
    ? "max-width: 740px; width: 100%;"
    : "align-self: stretch;"};
`;

const Width700 = ({ center, children, spaceBottom }) => {
  const style = {};

  if (spaceBottom) {
    style.marginBottom = 30;
  }

  if (center) {
    style.display = "flex";
    style.alignItems = "center";
  }

  return <StyledWidth700 style={style}>{children}</StyledWidth700>;
};

export default Width700;
