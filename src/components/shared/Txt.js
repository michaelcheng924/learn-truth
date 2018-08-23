import React from "react";
import styled from "styled-components/primitives";

import Responsive from "./Responsive";

const TxtLarge = styled.Text`
  color: #000;
  font-size: 21px;
  line-height: 33.18px;
  opacity: 0.84;
`;

const TxtMedium = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 28.44px;
  opacity: 0.84;
`;

const Txt = ({ children, style }) => (
  <Responsive
    largeComponent={TxtLarge}
    mediumComponent={TxtMedium}
    style={style}
  >
    {children}
  </Responsive>
);

export default Txt;
