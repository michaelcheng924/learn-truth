import React, { Component } from "react";
import styled from "styled-components/primitives";
import { partial } from "lodash";

import { Animated, Platform, TouchableOpacity } from "react-native";
import { Redirect } from "./router/react-router";

const MenuTextContainer = styled.View`
  align-items: center;
  border-color: #9e9e9e;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 20px;
  width: 280px;
`;

const MenuImage = styled.Image`
  height: 15px;
  margin-right: 10px;
  width: 15px;
`;

const MenuText = styled.Text`
  width: 280px;
`;

const AppStoreImage = styled.Image`
  height: 36px;
  width: 120px;
`;

class Menu extends Component {
  state = {
    url: null,
    widthAnim: new Animated.Value(0)
  };

  componentDidUpdate(prevProps) {
    const { showMenu } = this.props;

    if (!prevProps.showMenu && showMenu) {
      Animated.spring(this.state.widthAnim, {
        toValue: 280,
        duration: 150,
        friction: 15
      }).start();
    } else if (prevProps.showMenu && !showMenu) {
      Animated.spring(this.state.widthAnim, {
        toValue: 0,
        duration: 150,
        friction: 15
      }).start();
    }
  }

  onLinkClick = url => {
    this.props.toggleMenu();
    this.setState({ url }, () => {
      this.setState({ url: null });
    });
  };

  renderLink(url, label, source) {
    return (
      <TouchableOpacity onPress={partial(this.onLinkClick, url)}>
        <MenuTextContainer>
          <MenuImage source={source} />
          <MenuText>{label}</MenuText>
        </MenuTextContainer>
      </TouchableOpacity>
    );
  }

  renderMobileLinks() {
    return (
      <TouchableOpacity>
        <MenuTextContainer style={{ paddingLeft: 10 }}>
          <AppStoreImage
            source={require("../images/app-store.png")}
            style={{ marginRight: 20 }}
          />
          <AppStoreImage source={require("../images/google-play.png")} />
        </MenuTextContainer>
      </TouchableOpacity>
    );
  }

  renderRedirect() {
    if (!this.state.url) {
      return null;
    }

    return <Redirect to={this.state.url} />;
  }

  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: "#fff",
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.28,
          shadowRadius: 16,
          width: this.state.widthAnim,
          zIndex: 1
        }}
      >
        {this.renderRedirect()}
        {this.renderLink("/", "Home", require("../images/icon-home.png"))}
        {this.renderLink(
          "/gospel",
          "The Gospel",
          require("../images/menu-cross.png")
        )}
        {/* {this.renderLink(
          "/answers",
          "Answers",
          require("../images/icon-question-mark.png")
        )} */}
        {this.renderLink(
          "/catechism-practice",
          "Catechism Practice",
          require("../images/icon-speech-bubbles.png")
        )}
        {this.renderLink(
          "/resources",
          "Resources",
          require("../images/icon-list.png")
        )}
        {this.renderLink(
          "/church-finder",
          "Church Finder",
          require("../images/icon-church.png")
        )}
        {this.renderLink("/about", "About", require("../images/icon-info.png"))}
        {Platform.OS === "web" ? this.renderMobileLinks() : null}
      </Animated.View>
    );
  }
}

export default Menu;
