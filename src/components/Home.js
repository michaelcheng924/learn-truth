import React, { Component } from "react";
import styled from "styled-components/primitives";

import { TouchableOpacity, View } from "react-native";

import { HOME_PAGES } from "../constants/pages";
import Banner from "./Banner";

const HomeContainer = styled.View``;

const LinksContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const LinkContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-bottom: 20px;
`;

const LinkImageContainer = styled.View`
  border-radius: 50px;
  height: 100px;
  margin-right: 15px;
  overflow: hidden;
  padding: 20px;
  width: 100px;
`;

const LinkImage = styled.Image`
  height: 60px;
  width: 60px;
`;

const LinkName = styled.Text`
  font-size: 25px;
  font-weight: 500;
  width: 230px;
`;

const LinkDescription = styled.Text`
  color: #616161;
  font-size: 18px;
  width: 230px;
`;

class Home extends Component {
  renderLink({ title, description, url, backgroundColor, image }) {
    return (
      <TouchableOpacity
        key={title}
        onPress={() => this.props.history.push(url)}
      >
        <LinkContainer>
          <LinkImageContainer style={{ backgroundColor }}>
            <LinkImage source={image} />
          </LinkImageContainer>
          <View>
            <LinkName>{title}</LinkName>
            <LinkDescription>{description}</LinkDescription>
          </View>
        </LinkContainer>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <HomeContainer>
        <Banner />
        <LinksContainer>
          {HOME_PAGES.map(pageObject => {
            return this.renderLink(pageObject);
          })}
        </LinksContainer>
      </HomeContainer>
    );
  }
}

export default Home;
