import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

const BackContainer = styled.View`
  align-items: center;
  background: #2196f3;
  border-radius: 18px;
  display: flex;
  height: 36px;
  justify-content: center;
  margin: 20px 0 20px 20px;
  width: 36px;
`;

const BackImage = styled.Image`
  height: 20px;
  width: 20px;
`;

class ScreenSwitcher extends Component {
  state = {
    animLeftScreenRight: new Animated.Value(Dimensions.get("window").width),
    animRightScreenLeft: new Animated.Value(0)
  };

  componentDidUpdate(prevProps) {
    if (this.props.isLeft !== prevProps.isLeft) {
      if (this.props.isLeft) {
        this.onSwitchToLeft();
      } else {
        this.onReset();
      }
    }
  }

  onSwitchToLeft = () => {
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

  onReset = () => {
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

  renderBack() {
    return (
      <TouchableOpacity onPress={this.props.onBack}>
        <BackContainer>
          <BackImage source={require("../../images/icon-chevron-left.png")} />
        </BackContainer>
      </TouchableOpacity>
    );
  }

  render() {
    const { animLeftScreenRight, animRightScreenLeft } = this.state;

    const { leftContent, rightContent } = this.props;

    const width = Dimensions.get("window").width;

    return (
      <View>
        <Animated.View
          style={{
            width,
            position: "absolute",
            right: animLeftScreenRight
          }}
        >
          {this.renderBack()}
          {leftContent}
        </Animated.View>
        <Animated.View
          style={{
            width,
            left: animRightScreenLeft
          }}
        >
          {rightContent}
        </Animated.View>
      </View>
    );
  }
}

export default ScreenSwitcher;
