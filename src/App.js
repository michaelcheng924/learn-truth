import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform, ScrollView, View } from "react-native";
import { Router, Route } from "./components/router/react-router";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Gospel from "./components/Gospel";
import Answers from "./components/Answers";
import CatechismPractice from "./components/CatechismPractice";
import Resources from "./components/Resources";
import ChurchFinder from "./components/ChurchFinder";
import About from "./components/About";

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

  renderGospel = ({ history }) => {
    return <Gospel scrollView={this.scrollView} history={history} />;
  };

  renderResources = () => {
    return <Resources scrollView={this.scrollView} />;
  };

  renderChurchFinder = () => {
    return <ChurchFinder scrollView={this.scrollView} />;
  };

  render() {
    return (
      <Router>
        <ScrollView ref={scrollView => (this.scrollView = scrollView)}>
          <View
            style={{
              height:
                Platform.OS === "android" ? 24 : Platform.OS === "ios" ? 24 : 0
            }}
          />
          <Navbar toggleMenu={this.toggleMenu} />
          <Route exact path="/" component={Home} />
          <Route path="/gospel" render={this.renderGospel} />
          <Route path="/answers" component={Answers} />
          <Route path="/catechism-practice" component={CatechismPractice} />
          <Route path="/resources" render={this.renderResources} />
          <Route path="/church-finder" render={this.renderChurchFinder} />
          <Route path="/about" component={About} />
          {this.renderMenu()}
        </ScrollView>
      </Router>
    );
  }
}

export default App;
