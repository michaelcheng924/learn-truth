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

const CourseListContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto;
  width: 700px;
`;

const CourseContainer = styled.View`
  border-color: #bdc3c7;
  border-width: 1px;
  display: flex;
  height: 290px;
  margin-bottom: 20px
  width: 218px;
`;

const CourseImage = styled.Image`
  height: 122px;
  width: 216px;
`;

const CourseInfoContainer = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 12px;
`;

const CourseTitleContainer = styled.View``;

const CourseInfoHeader = styled.Text`
  font-size: 16px;
`;

const CourseInfoSubtitle = styled.Text`
  color: #7f8c8d;
  font-size: 13px;
  margin-top: 6px;
`;

const CourseActionContainer = styled.View``;

const CourseStartContainer = styled.View`
  background: #2ecc71;
  padding: 6px 0;
`;

const CourseStartText = styled.Text`
  background: #2ecc71;
  color: #fff;
  text-align: center;
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
        <CourseListContainer>
          {ALL.map((item, index) => {
            const { title, content, topics } = item;

            return (
              <TouchableOpacity key={index}>
                <CourseContainer>
                  <CourseImage
                    source={require("../images/answer_example.jpg")}
                  />
                  <CourseInfoContainer>
                    <CourseTitleContainer>
                      <CourseInfoHeader>{title}</CourseInfoHeader>
                      <CourseInfoSubtitle>{content}</CourseInfoSubtitle>
                    </CourseTitleContainer>
                    <CourseActionContainer>
                      <CourseStartContainer>
                        <CourseStartText>Read</CourseStartText>
                      </CourseStartContainer>
                    </CourseActionContainer>
                  </CourseInfoContainer>
                </CourseContainer>
              </TouchableOpacity>
            );
          })}
        </CourseListContainer>
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
