import React, { Component } from "react";
import styled from "styled-components/primitives";

const FinishedContainer = styled.View``;

const FinishedText = styled.Text`
  margin-bottom: 10px;
`;

class Finished extends Component {
  render() {
    return (
      <FinishedContainer>
        <FinishedText>Nice work finishing up this course!</FinishedText>
      </FinishedContainer>
    );
  }
}

export default Finished;
