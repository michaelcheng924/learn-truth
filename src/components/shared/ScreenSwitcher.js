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
    return (
      <TouchableOpacity onPress={this.props.onBack}>
        <BackContainer
          style={{
            elevation: 10,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 5,
            shadowColor: "#000",
            shadowOpacity: 0.2
          }}
        >
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 18,
              shadowOffset: { width: 0, height: 6 },
              shadowRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.14
            }}
          >
            <View
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                height: 36,
                width: 36,
                borderRadius: 18,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 18,
                shadowColor: "#000",
                shadowOpacity: 0.12
              }}
            >
              <BackImage
                source={require("../../images/icon-chevron-left.png")}
              />
            </View>
          </View>
        </BackContainer>
      </TouchableOpacity>
    );
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
