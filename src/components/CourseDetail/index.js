import React, { Component } from "react";
import styled from "styled-components/primitives";

import { COURSE_CONTENT_MAPPING } from "../../courses/list";
import Slide from "./Slide";
import Finished from "./Finished";

const CourseContainer = styled.View`
  padding: 20px 5px;
`;

const CourseName = styled.Text`
  font-size: 30px;
  margin-bottom: 5px;
`;

const CourseSubtitle = styled.Text`
  color: #7f8c8d;
  font-size: 18px;
  margin-bottom: 20px;
`;

class Course extends Component {
  state = {
    courseDetail: {},
    currentSlideIndex: 0
  };

  componentWillMount() {
    const { match } = this.props;
    const courseDetail = COURSE_CONTENT_MAPPING[match.params.name];

    this.setState({
      courseDetail,
      currentSlideIndex: Number(match.params.slideNumber) - 1
    });
  }

  componentWillUpdate(nextProps) {
    const { match } = nextProps;

    if (this.props.match.params.slideNumber !== match.params.slideNumber) {
      this.setState({
        currentSlideIndex: Number(match.params.slideNumber) - 1
      });
    }
  }

  render() {
    const { courseDetail, currentSlideIndex } = this.state;
    const { name, slides, subtitle, url } = courseDetail;

    let title;
    let content;
    let isFinished;

    if (currentSlideIndex === slides.length) {
      isFinished = true;
      content = Finished;
    } else {
      title = slides[currentSlideIndex].title;
      content = slides[currentSlideIndex].content;
    }

    return (
      <CourseContainer>
        <CourseName>{name}</CourseName>
        <CourseSubtitle>{subtitle}</CourseSubtitle>
        <Slide
          changeSlideIndex={this.changeSlideIndex}
          Content={content}
          currentNumber={currentSlideIndex + 1}
          isFinished={isFinished}
          slideCount={slides.length}
          title={title}
          url={url}
        />
      </CourseContainer>
    );
  }
}

export default Course;
