import React from "react";
import styled from "styled-components/primitives";

import Responsive from "./Responsive";

const QuoteLarge = styled.Text`
  color: #795548;
  font-size: 21px;
  font-style: italic;
  line-height: 33.18px;
  margin-top: 29px;
`;

const QuoteMedium = styled.Text`
  color: #795548;
  font-size: 18px;
  font-style: italic;
  line-height: 28.44px;
  margin-top: 21px;
`;

const Quote = ({ children, first, noMargin, style }) => (
  <Responsive
    largeComponent={QuoteLarge}
    mediumComponent={QuoteMedium}
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

export default Quote;
