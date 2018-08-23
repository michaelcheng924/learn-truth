import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Dimensions, Platform } from "react-native";

class Responsive extends Component {
  state = {
    size: Dimensions.get("window").width >= 700 ? "large" : "medium"
  };

  componentDidMount() {
    if (Platform.OS === "web") {
      window.addEventListener("resize", () => {
        const isLarge = Dimensions.get("window").width >= 700;

        if (isLarge && this.state.size === "medium") {
          this.setState({ size: "large" });
        } else if (!isLarge && this.state.size === "large") {
          this.setState({ size: "medium" });
        }
      });
    }
  }

  render() {
    const { size } = this.state;
    const { children, style, largeComponent, mediumComponent } = this.props;

    const Component = size === "large" ? largeComponent : mediumComponent;

    return <Component style={style}>{children}</Component>;
  }
}

export default Responsive;
