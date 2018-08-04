import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Linking, Platform, TouchableOpacity } from "react-native";
import { PageHeading } from "./shared";

const ResourcesContainer = styled.View`
  padding: 0 20px 20px;
`;

const OptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const OptionContainer = styled.View`
  align-items: center;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 200px;
`;

const OptionText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 700px;
`;

const ResourceContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const ResourceImage = styled.Image`
  height: 80px;
  margin-right: 20px;
  width: 80px;
`;

const ResourceInfoContainer = styled.View``;

const ResourceName = styled.Text`
  font-size: 25px;
  font-weight: 500;
  width: 240px;
`;

const ResourceDescription = styled.Text`
  color: #616161;
  font-size: 18px;
  width: 240px;
`;

const ResourceLink = styled.Text`
  color: #689f38;
  font-size: 18px;
  line-height: 28;
`;

class Resources extends Component {
  componentDidMount() {
    setTimeout(() => {
      if (Platform.OS === "web") {
        window.scrollTo(0, 0);
      } else {
        this.props.scrollView.scrollTo({ y: 0, animated: true });
      }
    });
  }

  render() {
    return (
      <ResourcesContainer>
        <PageHeading style={{ marginBottom: 20 }}>Resources</PageHeading>
        <ContentContainer>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://g3conference.com/archives")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/g3.png")} />
              <ResourceInfoContainer>
                <ResourceName>G3 Conference</ResourceName>
                <ResourceDescription>
                  Lots of free videos of many great teachers. New videos come
                  out every year.
                </ResourceDescription>
                <ResourceLink>g3conference.com/archives</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("http://aomin.org")}>
            <ResourceContainer>
              <ResourceImage source={require("../images/james-white.png")} />
              <ResourceInfoContainer>
                <ResourceName>
                  James White (Alpha & Omega Ministries)
                </ResourceName>
                <ResourceDescription>
                  James White is an apologist with terrific resources (videos,
                  books, articles, etc.).
                </ResourceDescription>
                <ResourceLink>aomin.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://ligonier.org")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/ligonier.png")} />
              <ResourceInfoContainer>
                <ResourceName>Ligonier Ministries</ResourceName>
                <ResourceDescription>
                  Founded by the late R.C. Sproul, who was a great teacher of
                  Reformed theology
                </ResourceDescription>
                <ResourceLink>ligonier.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://desiringgod.org")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/desiringgod.png")} />
              <ResourceInfoContainer>
                <ResourceName>Desiring God</ResourceName>
                <ResourceDescription>
                  Started by now-retired pastor John Piper
                </ResourceDescription>
                <ResourceLink>desiringgod.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://answersingenesis.org")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/aig.png")} />
              <ResourceInfoContainer>
                <ResourceName>Answers in Genesis</ResourceName>
                <ResourceDescription>
                  Resources that defend the biblical account of creation
                </ResourceDescription>
                <ResourceLink>answersingenesis.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
        </ContentContainer>
      </ResourcesContainer>
    );
  }
}

export default Resources;
