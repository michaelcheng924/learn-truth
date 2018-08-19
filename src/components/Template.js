import React, { Component } from "react";
import styled from "styled-components/primitives";

import { PageHeading } from "./shared";

const TemplateContainer = styled.View`
  padding: 0 20px 20px;
`;

class Template extends Component {
  render() {
    return (
      <TemplateContainer>
        <PageHeading>Template</PageHeading>
      </TemplateContainer>
    );
  }
}

export default Template;
