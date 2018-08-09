import React, { Component } from "react";
import styled from "styled-components/primitives";

import { TextInput } from "react-native";
import { PageHeading } from "./shared";
import { Markdown } from "./markdown";

const AnswersContainer = styled.View`
  display: flex;
  align-items: center;
`;

class Answers extends Component {
  render() {
    return (
      <AnswersContainer>
        <PageHeading>Answers</PageHeading>
        <TextInput
          placeholder="Search here"
          style={{
            borderBottomWidth: 1,
            borderColor: "#95a5a6",
            fontSize: 20,
            marginTop: 20,
            textAlign: "center",
            width: 300
          }}
        />
        <Markdown customizer={this.test}>{`
blah blah
**bold**
        `}</Markdown>
      </AnswersContainer>
    );
  }
}

export default Answers;
