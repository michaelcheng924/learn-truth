import React, { Component } from "react";
import styled from "styled-components/primitives";
import { partial } from "lodash";

import { Dimensions, Platform, ScrollView, View } from "react-native";
import { Router, Route } from "./components/router/react-router";

import { ROUTES } from "./constants/pages";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const MenuOverlayTouchable = styled.Touchable``;

const MenuOverlay = styled.View`
  background: #000;
  height: 2000px;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 2000px;
  z-index: 1;
`;

class App extends Component {
  scrollView = {};

  state = {
    showMenu: false
  };

  componentDidMount() {
    this.forceUpdate();
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  scrollUp = (webY = 0, mobileY = 0) => {
    setTimeout(() => {
      if (Platform.OS === "web") {
        window.scrollTo(0, webY);
      } else {
        this.scrollView.scrollTo({ y: mobileY, animated: true });
      }
    });
  };

  renderMenu() {
    const { showMenu } = this.state;

    return (
      <View
        style={{
          position: "absolute",
          top: Platform.OS === "web" ? 45 : 69
        }}
      >
        {showMenu ? (
          <MenuOverlayTouchable onPress={this.toggleMenu}>
            <MenuOverlay />
          </MenuOverlayTouchable>
        ) : null}
        <Menu showMenu={showMenu} toggleMenu={this.toggleMenu} />
      </View>
    );
  }

  renderRoute = (Component, { history }) => {
    return <Component scrollUp={this.scrollUp} history={history} />;
  };

  render() {
    return (
      <Router>
        <View>
          <View
            style={{
              backgroundColor: "#666",
              height:
                Platform.OS === "android" || Platform.OS === "ios" ? 24 : 0
            }}
          />
          <ScrollView
            className="scroll-container"
            ref={scrollView => (this.scrollView = scrollView)}
            style={
              Platform.OS === "web"
                ? {}
                : { height: Dimensions.get("window").height - 24 }
            }
          >
            <Navbar toggleMenu={this.toggleMenu} />
            <View style={{ minHeight: Dimensions.get("window").height - 45 }}>
              {ROUTES.map(({ exact, path, Component }) => {
                return (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    render={partial(this.renderRoute, Component)}
                  />
                );
              })}
            </View>
            {this.renderMenu()}
          </ScrollView>
        </View>
      </Router>
    );
  }
}

export default App;
