import React, { Component } from "react";
import styled from "styled-components/primitives";

import SlideNavigation from "./SlideNavigation";

const SlideContainer = styled.View`
  border-color: #95a5a6;
  border-width: 1px;
`;

const SlideTitle = styled.Text`
  background: #3498db;
  color: #fff;
  font-size: 20;
  padding: 10px 20px;
`;

const SlideContent = styled.View`
  padding: 10px 20px 0;
`;

class Slide extends Component {
  renderTitle() {
    const { isFinished, title } = this.props;

    return (
      <SlideTitle
        style={{
          backgroundColor: isFinished ? "#2ecc71" : "#3498db"
        }}
      >
        {isFinished ? "Hooray, you finished!" : title}
      </SlideTitle>
    );
  }

  renderContent() {
    const { Content } = this.props;

    return <Content />;
  }

  render() {
    const { currentNumber, slideCount, changeSlideIndex, url } = this.props;

    return (
      <SlideContainer>
        <SlideNavigation
          currentNumber={currentNumber}
          slideCount={slideCount}
          changeSlideIndex={changeSlideIndex}
          url={url}
        />
        {this.renderTitle()}
        <SlideContent>{this.renderContent()}</SlideContent>
      </SlideContainer>
    );
  }
}

export default Slide;
