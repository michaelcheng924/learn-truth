import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Dimensions, Platform } from "react-native";

class Responsive extends Component {
  state = {
    size: Dimensions.get("window").width >= 550 ? "large" : "medium"
  };

  componentDidMount() {
    if (Platform.OS === "web") {
      window.addEventListener("resize", () => {
        const { size } = this.state;

        const width = Dimensions.get("window").width;

        const isLarge = width >= 550;

        if (isLarge && size !== "large") {
          this.setState({ size: "large" });
        } else if (!isLarge && size === "large") {
          this.setState({ size: "medium" });
        }
      });
    }
  }

  render() {
    const { size } = this.state;
    const { children, height, source, style, width } = this.props;

    let imageWidth;
    let imageHeight;
    let marginTop = 35;

    if (size === "large") {
      imageWidth = width * 1.5;
      imageHeight = height * 1.5;
      marginTop = 43;
    } else {
      imageWidth = width;
      imageHeight = height;
    }

    const ImageComponent = styled.Image`
      height: ${imageHeight}px;
      margin: ${marginTop}px auto 0;
      width: ${imageWidth}px;
    `;

    return (
      <ImageComponent source={source} style={style}>
        {children}
      </ImageComponent>
    );
  }
}

export default Responsive;
