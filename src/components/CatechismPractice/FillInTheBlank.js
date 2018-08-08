import React, { Component } from "react";
import styled from "styled-components/primitives";
import { get, partial } from "lodash";

import { Platform, StyleSheet, TextInput } from "react-native";

const CatechismAnswer = styled.View`
  padding: 12px 20px 20px;
  position: relative;
`;

const AnswersContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CatechismWord = styled.Text``;

export default class FillInTheBlank extends Component {
  renderAnswers() {
    const { fillAnswers, onBlankChange } = this.props;

    let blankInputIndex = 0;
    let blankInputIndexForValue = -1;
    this.blankInputs = [];

    return (
      <AnswersContainer>
        {this.props.question.split(" ").map((word, index) => {
          if (word.indexOf("**") !== -1) {
            blankInputIndexForValue++;

            const fillAnswer = fillAnswers[blankInputIndexForValue];

            const textInputStyles =
              Platform.OS === "web"
                ? [
                    {
                      outline: "none",
                      borderColor: "#212121",
                      borderBottomWidth: 1,
                      marginRight: 6,
                      marginTop: 8,
                      textAlign: "center",
                      width: 80
                    }
                  ]
                : [styles.blankInput];

            if (get(fillAnswer, "correct", false)) {
              textInputStyles.push(styles.blankInputCorrect);
            }

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
                underlineColorAndroid="rgba(0,0,0,0)"
                value={get(fillAnswer, "answer", "")}
              />
            );
          }

          return (
            <CatechismWord key={index} style={styles.word}>
              {word}
            </CatechismWord>
          );
        })}
      </AnswersContainer>
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
    marginTop: 8,
    textAlign: "center",
    width: 80
  },
  blankInputCorrect: {
    color: "#43A047",
    borderColor: "#43A047",
    borderBottomWidth: 2,
    fontWeight: "bold"
  },
  word: {
    marginRight: 6,
    marginTop: 8
  }
});
