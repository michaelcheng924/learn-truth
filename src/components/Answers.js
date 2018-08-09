import React, { Component } from "react";
import styled from "styled-components/primitives";

import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { PageHeading } from "./shared";
import { ALL } from "../constants/answers";

const AnswersContainer = styled.View`
  display: flex;
  align-items: center;
`;

const QuestionsContainer = styled.View`
  border-color: #757575;
  border-radius: 5px;
  border-width: 1px;
  margin: 20px auto;
  max-width: 720px;
  overflow: hidden;
`;

const QuestionContainer = styled.View`
  border-color: #757575;
  border-bottom-width: 1px;
  padding: 10px 20px;
`;

const QuestionText = styled.Text`
  color: #689f38;
  font-size: 20px;
`;

class Answers extends Component {
  render() {
    const textInputStyles =
      Platform.OS === "web"
        ? {
            outline: "none",
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
            fontSize: 20,
            marginTop: 20,
            textAlign: "center",
            width: 300
          }
        : styles.searchInput;

    return (
      <AnswersContainer>
        <PageHeading>Answers</PageHeading>
        <TextInput placeholder="Search" style={textInputStyles} />
        <QuestionsContainer>
          {ALL.map((item, index) => {
            return (
              <TouchableOpacity key={item.title}>
                <QuestionContainer
                  style={{
                    borderBottomWidth: index === ALL.length - 1 ? 0 : 1
                  }}
                >
                  <QuestionText>{item.title}</QuestionText>
                </QuestionContainer>
              </TouchableOpacity>
            );
          })}
        </QuestionsContainer>
      </AnswersContainer>
    );
  }
}

export default Answers;

const styles = StyleSheet.create({
  searchInput: {
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    width: 300
  }
});
