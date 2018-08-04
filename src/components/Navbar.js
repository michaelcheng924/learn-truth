import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform, TouchableOpacity } from "react-native";
import { Link } from "./router/react-router";

const Nav = styled.View`
  align-items: center;
  background: #666;
  display: flex;
  flex-direction: row;
  height: 45px;
  padding-left: 20px;
  width: 100%;
`;

const NavHamburger = styled.Image`
  height: 18px;
  margin-right: 10px;
  width: 25px;
`;

const LogoContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.Image`
  height: 34px;
  width: 28px;
`;

const NavLeft = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const NavMiddle = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

const NavRight = styled.View`
  width: 25px;
`;

const LogoText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 5px;
`;

const LogoTextTruth = styled.Text`
  color: #faeb6c;
  font-size: 18px;
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavLeft>
          <TouchableOpacity onPress={this.props.toggleMenu}>
            <NavHamburger source={require("../images/icon-hamburger.png")} />
          </TouchableOpacity>
        </NavLeft>
        <NavMiddle>
          <Link
            style={Platform.OS === "web" ? { textDecoration: "none" } : {}}
            to="/"
          >
            <TouchableOpacity>
              <LogoContainer>
                <Logo source={require("../images/icon-cross.png")} />
                <LogoText>learn</LogoText>
                <LogoTextTruth>TRUTH</LogoTextTruth>
              </LogoContainer>
            </TouchableOpacity>
          </Link>
        </NavMiddle>
        <NavRight />
      </Nav>
    );
  }
}

export default Navbar;
