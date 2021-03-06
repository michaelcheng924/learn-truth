import React from "react";
import styled from "styled-components/primitives";

import Responsive from "./Responsive";

const TxtLarge = styled.Text`
  color: #000;
  font-size: 21px;
  line-height: 33.18px;
  margin-top: 29px;
  opacity: 0.84;
`;

const TxtMedium = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 28.44px;
  margin-top: 21px;
  opacity: 0.84;
`;

const Txt = ({ children, first, noMargin, style }) => (
  <Responsive
    largeComponent={TxtLarge}
    mediumComponent={TxtMedium}
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

export default Txt;
