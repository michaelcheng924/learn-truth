import React, { Component } from "react";
import styled from "styled-components/primitives";

import { TouchableOpacity, View } from "react-native";
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
  render() {
    return (
      <HomeContainer>
        <Banner />
        <LinksContainer>
          <TouchableOpacity onPress={() => this.props.history.push("/gospel")}>
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#1565C0" }}>
                <LinkImage source={require("../images/menu-cross-white.png")} />
              </LinkImageContainer>
              <View>
                <LinkName>The Gospel</LinkName>
                <LinkDescription>
                  Learn and share a gospel summary
                </LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.history.push("/answers")}>
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#0097A7" }}>
                <LinkImage
                  source={require("../images/icon-question-mark-white.png")}
                />
              </LinkImageContainer>
              <View>
                <LinkName>Answers</LinkName>
                <LinkDescription>Defend the Bible's teachings</LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("/catechism-practice")}
          >
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#FF5722" }}>
                <LinkImage
                  source={require("../images/icon-speech-bubbles-white.png")}
                />
              </LinkImageContainer>
              <View>
                <LinkName>Catechism Practice</LinkName>
                <LinkDescription>
                  Learn through questions and answers
                </LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("/resources")}
          >
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#689F38" }}>
                <LinkImage source={require("../images/icon-list-white.png")} />
              </LinkImageContainer>
              <View>
                <LinkName>Resources</LinkName>
                <LinkDescription>
                  Resources to help you grow in your faith
                </LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.history.push("/church-finder")}
          >
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#795548" }}>
                <LinkImage
                  source={require("../images/icon-church-white.png")}
                />
              </LinkImageContainer>
              <View>
                <LinkName>Church Finder</LinkName>
                <LinkDescription>Find a solid church to attend</LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.history.push("/about")}>
            <LinkContainer>
              <LinkImageContainer style={{ backgroundColor: "#757575" }}>
                <LinkImage source={require("../images/icon-info-white.png")} />
              </LinkImageContainer>
              <View>
                <LinkName>About</LinkName>
                <LinkDescription>
                  Learn more about and support learntruth.io
                </LinkDescription>
              </View>
            </LinkContainer>
          </TouchableOpacity>
        </LinksContainer>
      </HomeContainer>
    );
  }
}

export default Home;
