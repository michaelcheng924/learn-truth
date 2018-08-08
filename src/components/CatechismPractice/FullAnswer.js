import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform, StyleSheet, TextInput } from "react-native";

const CatechismAnswer = styled.View`
  padding: 20px;
  position: relative;
`;

export default class FullAnswer extends Component {
  render() {
    const { answer, onAnswerChange } = this.props;

    const textInputStyles =
      Platform.OS === "web"
        ? {
            outline: "none",
            width: 310
          }
        : styles.answerInput;

    return (
      <CatechismAnswer>
        <TextInput
          multiline
          numberOfLines={3}
          onChangeText={onAnswerChange}
          placeholder="Type answer here"
          ref={answerInput => (this.answerInput = answerInput)}
          style={textInputStyles}
          underlineColorAndroid="rgba(0,0,0,0)"
          value={answer}
        />
      </CatechismAnswer>
    );
  }
}

const styles = StyleSheet.create({
  answerInput: {
    width: 310
  }
});
