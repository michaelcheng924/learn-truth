import React, { Component } from "react";
import styled from "styled-components/primitives";

import Course from "./Course";
import { COURSE_LIST } from "../../courses/list";

const CoursesContainer = styled.View`
  padding: 20px;
`;

const CoursesHeading = styled.Text`
  color: #7f8c8d;
  font-size: 30px;
`;

const CourseListContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

class Courses extends Component {
  render() {
    return (
      <CoursesContainer>
        <CoursesHeading>Courses</CoursesHeading>
        <CourseListContainer>
          {COURSE_LIST.map((course, index) => {
            return <Course key={index} {...course} />;
          })}
        </CourseListContainer>
      </CoursesContainer>
    );
  }
}

export default Courses;
