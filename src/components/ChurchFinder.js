import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Linking, Platform, TouchableOpacity } from "react-native";
import { PageHeading } from "./shared";

const ResourcesContainer = styled.View`
  padding: 0 20px 20px;
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
        <PageHeading style={{ marginBottom: 20 }}>Church Finder</PageHeading>
        <ContentContainer>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://http://www.farese.com/map")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/globe.png")} />
              <ResourceInfoContainer>
                <ResourceName>Reformed Baptist Church Directory</ResourceName>
                <ResourceLink>farese.com</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("http://thegospelcoalition.org/churches")
            }
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/tgc.png")} />
              <ResourceInfoContainer>
                <ResourceName>Gospel Coalition Church Directory</ResourceName>
                <ResourceLink>thegospelcoalition.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://9marks.org/church-search")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/9marks.png")} />
              <ResourceInfoContainer>
                <ResourceName>9Marks Church Search</ResourceName>
                <ResourceLink>9marks.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://opc.org/locator.html")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/opc.png")} />
              <ResourceInfoContainer>
                <ResourceName>
                  Orthodox Presbyterian Church Directory
                </ResourceName>
                <ResourceLink>opc.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://pcaac.org/church-search")}
          >
            <ResourceContainer>
              <ResourceImage source={require("../images/pca.png")} />
              <ResourceInfoContainer>
                <ResourceName>
                  Presbyterian Church of America Directory
                </ResourceName>
                <ResourceLink>pcaac.org</ResourceLink>
              </ResourceInfoContainer>
            </ResourceContainer>
          </TouchableOpacity>
        </ContentContainer>
      </ResourcesContainer>
    );
  }
}

export default Resources;
