import React, { Component } from "react";
import styled from "styled-components/primitives";
import { get, partial } from "lodash";

import { Platform, StyleSheet, Text as RNText, TextInput } from "react-native";

const CatechismAnswer = styled.View`
  padding: 20px;
  position: relative;
`;

const CatechismWord = styled.Text``;

export default class FillInTheBlank extends Component {
  renderAnswers() {
    const { fillAnswers, onBlankChange } = this.props;

    const textInputStyles =
      Platform.OS === "web"
        ? {
            outline: "none",
            borderColor: "#212121",
            borderBottomWidth: 1,
            marginRight: 6,
            textAlign: "center",
            width: 80
          }
        : styles.blankInput;

    let blankInputIndex = 0;
    let blankInputIndexForValue = -1;
    this.blankInputs = [];

    return (
      <RNText>
        {this.props.question.split(" ").map((word, index) => {
          if (word.indexOf("**") !== -1) {
            blankInputIndexForValue++;

            return (
              <TextInput
                key={index}
                onChangeText={partial(onBlankChange, blankInputIndexForValue)}
                placeholder="?"
                ref={blankInput => {
                  if (blankInput) {
                    this.blankInputs[blankInputIndex] = blankInput;
                    blankInputIndex++;
                  }
                }}
                style={textInputStyles}
                underlineColorAndroid="rgba(0,0,0,0"
                value={get(fillAnswers[blankInputIndexForValue], "answer", "")}
              />
            );
          }

          return (
            <CatechismWord key={index} style={styles.word}>
              {word}
            </CatechismWord>
          );
        })}
      </RNText>
    );
  }

  render() {
    return <CatechismAnswer>{this.renderAnswers()}</CatechismAnswer>;
  }
}

const styles = StyleSheet.create({
  blankInput: {
    borderColor: "#212121",
    borderBottomWidth: 1,
    marginRight: 6,
    textAlign: "center",
    width: 80
  },
  word: {
    marginRight: 6
  }
});
