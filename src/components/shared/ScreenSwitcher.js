import React, { Component } from "react";

import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

class ScreenSwitcher extends Component {
  state = {
    animLeftScreenRight: new Animated.Value(0),
    animRightScreenLeft: new Animated.Value(Dimensions.get("window").width),
    leftComplete: true,
    rightComplete: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.isLeft !== prevProps.isLeft) {
      if (this.props.isLeft) {
        this.onSwitchToRight();
      } else {
        this.onReset();
      }
    }
  }

  onSwitchToRight = () => {
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

    setTimeout(() => {
      this.setState({ leftComplete: false, rightComplete: true });
    }, 250);
  };

  onReset = () => {
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

    setTimeout(() => {
      this.setState({ leftComplete: true, rightComplete: false });
    }, 250);
  };

  renderBack() {
    const { onBack, renderBack } = this.props;

    return <TouchableOpacity onPress={onBack}>{renderBack()}</TouchableOpacity>;
  }

  render() {
    const {
      animLeftScreenRight,
      animRightScreenLeft,
      leftComplete,
      rightComplete
    } = this.state;

    const { leftContent, rightContent } = this.props;

    const width = Dimensions.get("window").width;

    return (
      <View>
        <Animated.View
          style={{
            width,
            position: leftComplete ? "relative" : "absolute",
            right: animLeftScreenRight
          }}
        >
          {leftContent}
        </Animated.View>
        <Animated.View
          style={{
            width,
            left: animRightScreenLeft,
            position: rightComplete ? "relative" : "absolute"
          }}
        >
          {this.renderBack()}
          {rightContent}
        </Animated.View>
      </View>
    );
  }
}

export default ScreenSwitcher;
