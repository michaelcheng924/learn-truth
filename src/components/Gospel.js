import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform, TouchableOpacity } from "react-native";

import { PageHeader, Width700 } from "./shared";
import {
  Intro,
  Bible,
  God,
  Sin,
  Jesus,
  Salvation,
  NextSteps
} from "../constants/gospel";

const GospelContainer = styled.View`
  margin-bottom: 20px;
`;

const GospelSectionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 300px;
`;

const GospelSection = styled.View`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  padding: 5px 10px;
`;

const GospelSectionNumberContainer = styled.View`
  align-items: center;
  border-radius: 14px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  height: 28px;
  justify-content: center;
  margin-right: 10px;
  width: 28px;
`;

const GospelSectionText = styled.Text`
  font-size: 21px;
`;

const GospelButtonContainer = styled.View`
  border-width: 1px;
  margin-left: auto;
  margin-top: 25px;
  padding: 10px 20px;
`;

const GospelButton = styled.Text`
  font-size: 20px;
`;

class Gospel extends Component {
  state = {
    active: 1,
    url: null
  };

  changeSection = () => {
    const { active } = this.state;

    this.setState({ active: active + 1 });

    this.props.scrollUp(161, 190);
  };

  navigateToResources = () => {
    this.props.history.push("/resources");
  };

  navigateToChurchFinder = () => {
    this.props.history.push("/church-finder");
  };

  renderSectionTab({ index, text }) {
    let backgroundColor = "#fff";
    let color = "#757575";

    if (this.state.active === index) {
      backgroundColor = "#2196F3";
      color = "#fff";
    }

    return (
      <TouchableOpacity onPress={() => this.setState({ active: index })}>
        <GospelSection
          style={{ backgroundColor, width: index === 7 ? 200 : 140 }}
        >
          <GospelSectionNumberContainer style={{ borderColor: color }}>
            <GospelSectionText style={{ color }}>{index}</GospelSectionText>
          </GospelSectionNumberContainer>
          <GospelSectionText style={{ color }}>{text}</GospelSectionText>
        </GospelSection>
      </TouchableOpacity>
    );
  }

  renderSection() {
    const { active } = this.state;

    if (active === 1) {
      return <Intro renderNextButton={this.renderNextButton} />;
    }

    if (active === 2) {
      return <Bible renderNextButton={this.renderNextButton} />;
    }

    if (active === 3) {
      return <God renderNextButton={this.renderNextButton} />;
    }

    if (active === 4) {
      return <Sin renderNextButton={this.renderNextButton} />;
    }

    if (active === 5) {
      return <Jesus renderNextButton={this.renderNextButton} />;
    }

    if (active === 6) {
      return <Salvation renderNextButton={this.renderNextButton} />;
    }

    if (active === 7) {
      return (
        <NextSteps
          renderNextButton={this.renderNextButton}
          navigateToResources={this.navigateToResources}
          navigateToChurchFinder={this.navigateToChurchFinder}
        />
      );
    }
  }

  renderNextButton = (color, text) => {
    return (
      <TouchableOpacity onPress={this.changeSection}>
        <GospelButtonContainer style={{ borderColor: color }}>
          <GospelButton style={{ color }}>{`${text} `} ➡</GospelButton>
        </GospelButtonContainer>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <GospelContainer>
        <PageHeader
          backgroundColor="#0097A7"
          title="What is the Gospel?"
          subtitle="Learn and share the most important truth in the universe"
        />
        <Width700 style={{ marginBottom: 20 }}>
          <GospelSectionsContainer>
            {this.renderSectionTab({
              index: 1,
              activeColor: "#757575",
              inactiveColor: "#E0E0E0",
              text: "Intro"
            })}
            {this.renderSectionTab({
              index: 2,
              activeColor: "#795548",
              inactiveColor: "#BCAAA4",
              text: "Bible"
            })}
          </GospelSectionsContainer>
          <GospelSectionsContainer>
            {this.renderSectionTab({
              index: 3,
              activeColor: "#673AB7",
              inactiveColor: "#B39DDB",
              text: "God"
            })}
            {this.renderSectionTab({
              index: 4,
              activeColor: "#F44336",
              inactiveColor: "#EF9A9A",
              text: "Sin"
            })}
          </GospelSectionsContainer>
          <GospelSectionsContainer>
            {this.renderSectionTab({
              index: 5,
              activeColor: "#1976D2",
              inactiveColor: "#90CAF9",
              text: "Jesus"
            })}
            {this.renderSectionTab({
              index: 6,
              activeColor: "#43A047",
              inactiveColor: "#A5D6A7",
              text: "Salvation"
            })}
          </GospelSectionsContainer>
          <GospelSectionsContainer>
            {this.renderSectionTab({
              index: 7,
              activeColor: "#009688",
              inactiveColor: "#80CBC4",
              text: "Next Steps"
            })}
          </GospelSectionsContainer>
        </Width700>
        {this.renderSection()}
      </GospelContainer>
    );
  }
}

export default Gospel;
