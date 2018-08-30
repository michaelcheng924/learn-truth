import React from "react";
import styled from "styled-components/primitives";

import Responsive from "./Responsive";

const HeadingLarge = styled.Text`
  color: #000;
  font-size: 34px;
  line-height: 39.1px;
  margin-top: 56px;
  opacity: 0.84;
`;

const HeadingMedium = styled.Text`
  color: #000;
  font-size: 30px;
  line-height: 34.5px;
  margin-top: 28px;
  opacity: 0.84;
`;

const Paragraph = ({ children, first, noMargin, style }) => (
  <Responsive
    largeComponent={HeadingLarge}
    mediumComponent={HeadingMedium}
    style={
      first
        ? { ...style, marginTop: 8 }
        : noMargin
          ? { ...style, marginTop: 0 }
          : style
    }
  >
    {children}
  </Responsive>
);

export default Paragraph;
