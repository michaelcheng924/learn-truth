import React, { Component } from "react";
import styled from "styled-components/primitives";
import { partial } from "lodash";

import { Animated, Platform, TouchableOpacity } from "react-native";
import { Redirect } from "./router/react-router";

import { MENU_LINKS } from "../constants/pages";

const MenuTextContainer = styled.View`
  align-items: center;
  border-color: #9e9e9e;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 20px;
`;

const MenuImage = styled.Image`
  height: 15px;
  margin-right: 10px;
  width: 15px;
`;

const MenuText = styled.Text`
  width: 280px;
  ${Platform.OS === "web" ? "white-space: nowrap;" : ""};
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

  renderLink(title, url, image) {
    return (
      <TouchableOpacity key={url} onPress={partial(this.onLinkClick, url)}>
        <MenuTextContainer>
          <MenuImage source={image} />
          <MenuText>{title}</MenuText>
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
        {MENU_LINKS.map(({ title, url, image }) => {
          return this.renderLink(title, url, image);
        })}
        {Platform.OS === "web" ? this.renderMobileLinks() : null}
      </Animated.View>
    );
  }
}

export default Menu;
