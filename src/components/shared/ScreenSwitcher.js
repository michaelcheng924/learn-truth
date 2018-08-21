import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Animated, Dimensions } from "react-native";

const ScreenSwitcherContainer = styled.View`
  padding: 0 20px 20px;
`;

class ScreenSwitcher extends Component {
  state = {
    animLeftScreenRight: new Animated.Value(Dimensions.get("window").width),
    animRightScreenLeft: new Animated.Value()
  };

  componentDidUpdate(prevProps) {
    if (this.props.isLeft !== prevProps.isLeft) {
      if (this.props.isLeft) {
        this.onSwitchToLeft();
      } else {
        this.onSwitchToRight();
      }
    }
  }

  onSwitchToRight = () => {
    const { animLeftScreenRight, animRightScreenLeft } = this.state;

    const width = Dimensions.get("window").width;

    Animated.timing(animLeftScreenRight, {
      toValue: 0,
      duration: 250
    }).start();

    Animated.timing(animRightScreenLeft, {
      toValue: width,
      duration: 250
    }).start();
  };

  onSwitchToLeft = () => {
    const { animLeftScreenRight, animRightScreenLeft } = this.state;

    const width = Dimensions.get("window").width;

    Animated.timing(animLeftScreenRight, {
      toValue: width,
      duration: 250
    }).start();

    Animated.timing(animRightScreenLeft, {
      toValue: 0,
      duration: 250
    }).start();
  };

  render() {
    const { animLeftScreenRight, animRightScreenLeft } = this.state;

    const { leftContent, rightContent } = this.props;

    const width = Dimensions.get("window").width;

    return (
      <ScreenSwitcherContainer>
        <Animated.View
          style={{
            width,
            position: "absolute",
            right: animLeftScreenRight
          }}
        >
          {leftContent}
        </Animated.View>
        <Animated.View
          style={{
            width,
            left: animRightScreenLeft,
            position: "absolute"
          }}
        >
          {rightContent}
        </Animated.View>
      </ScreenSwitcherContainer>
    );
  }
}

export default ScreenSwitcher;
