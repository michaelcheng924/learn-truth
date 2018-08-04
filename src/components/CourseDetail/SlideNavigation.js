import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Link } from "../router/react-router";

const SlideNavigationContainer = styled.View`
  background: #a1887f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
`;

const SlideNavigationBlank = styled.View`
  width: 13px;
`;

const SlideNavigationArrow = styled.Image`
  height: 21px
  width: 13px;
`;

const SlideNavigationFinished = styled.Image`
  height: 21px
  width: 21px;
`;

const SlideNavigationProgressContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const SlideNavigationText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const SlideNavigationProgressBar = styled.View`
  background: #2ecc71;
  height: 8px;
  margin-left: 8px;
`;

const SlideNavigationIncompleteBar = styled.View`
  background: #ecf0f1;
  height: 8px;
  margin-right: 8px;
`;

class SlideNavigation extends Component {
  getProgressWidth() {
    const { currentNumber, slideCount } = this.props;

    return Math.round(((currentNumber - 1) / slideCount) * 100) * 2;
  }

  getIncompleteWidth() {
    const { currentNumber, slideCount } = this.props;

    return 200 - Math.round(((currentNumber - 1) / slideCount) * 100) * 2;
  }

  renderPrevious() {
    const { currentNumber, url } = this.props;

    if (currentNumber === 1) {
      return <SlideNavigationBlank />;
    }

    return (
      <Link to={`${url}/${currentNumber - 1}`}>
        <SlideNavigationArrow
          source={require("../../images/chevron-left.png")}
        />
      </Link>
    );
  }

  renderNext() {
    const { currentNumber, slideCount, url } = this.props;

    if (currentNumber === slideCount) {
      return (
        <Link to={`${url}/${currentNumber + 1}`}>
          <SlideNavigationFinished
            source={require("../../images/icon-finished.png")}
          />
        </Link>
      );
    }

    return (
      <Link to={`${url}/${currentNumber + 1}`}>
        <SlideNavigationArrow
          source={require("../../images/chevron-right.png")}
        />
      </Link>
    );
  }

  renderProgress() {
    const { currentNumber, slideCount } = this.props;

    return (
      <SlideNavigationProgressContainer>
        <SlideNavigationText>
          {currentNumber > slideCount ? slideCount : currentNumber}
        </SlideNavigationText>
        <SlideNavigationProgressBar
          style={{ width: this.getProgressWidth() }}
        />
        <SlideNavigationIncompleteBar
          style={{ width: this.getIncompleteWidth() }}
        />
        <SlideNavigationText>{slideCount}</SlideNavigationText>
      </SlideNavigationProgressContainer>
    );
  }

  render() {
    return (
      <SlideNavigationContainer>
        {this.renderPrevious()}
        {this.renderProgress()}
        {this.renderNext()}
      </SlideNavigationContainer>
    );
  }
}

export default SlideNavigation;
