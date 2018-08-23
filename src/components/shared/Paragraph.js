import React from "react";
import styled from "styled-components/primitives";

import Responsive from "./Responsive";

const ParagraphLarge = styled.Text`
  margin-top: 29px;
`;

const ParagraphMedium = styled.Text`
  margin-top: 21px;
`;

const Paragraph = ({ children, style }) => (
  <Responsive
    largeComponent={ParagraphLarge}
    mediumComponent={ParagraphMedium}
    style={style}
  >
    {children}
  </Responsive>
);

export default Paragraph;
