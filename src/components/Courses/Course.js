import React, { Component } from "react";
import styled from "styled-components/primitives";
import pluralize from "pluralize";

import { Platform } from "react-native";
import { Link } from "../router/react-router";

const CourseContainer = styled.View`
  border-color: #bdc3c7;
  border-width: 1px;
  display: flex;
  height: 290px;
  margin-bottom: 20px
  width: 216px;
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
  font-size: 20px;
`;

const CourseInfoSubtitle = styled.Text`
  color: #7f8c8d;
  font-size: 16px;
  margin-top: 6px;
`;

const CourseActionContainer = styled.View``;

const CourseStats = styled.Text`
  color: #7f8c8d;
  margin-bottom: 5px;
  text-align: center;
`;

const CourseStartContainer = styled.View`
  background: #2ecc71;
  padding: 6px 0;
`;

const CourseStartText = styled.Text`
  background: #2ecc71;
  color: #fff;
  text-align: center;
`;

class Course extends Component {
  render() {
    const { imageUrl, name, subtitle, url, slides } = this.props;

    return (
      <CourseContainer>
        <CourseImage
          source={{
            uri: imageUrl
          }}
        />
        <CourseInfoContainer>
          <CourseTitleContainer>
            <CourseInfoHeader>{name}</CourseInfoHeader>
            <CourseInfoSubtitle>{subtitle}</CourseInfoSubtitle>
          </CourseTitleContainer>
          <CourseActionContainer>
            <CourseStats>
              {slides.length} {pluralize("slide", slides.length)}
            </CourseStats>
            <Link
              to={`${url}/1`}
              style={Platform.OS === "web" ? { textDecoration: "none" } : {}}
            >
              <CourseStartContainer>
                <CourseStartText>Start</CourseStartText>
              </CourseStartContainer>
            </Link>
          </CourseActionContainer>
        </CourseInfoContainer>
      </CourseContainer>
    );
  }
}

export default Course;
