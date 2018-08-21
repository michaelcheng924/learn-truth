import React, { Component } from "react";
import styled from "styled-components/primitives";
import { Markdown } from "./markdown";
import { get, partial, some } from "lodash";

import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { PageHeading, ScreenSwitcher } from "./shared";
import { ALL, TOPIC_DATA } from "../constants/answers";

const AnswersContainer = styled.View`
  display: flex;
  padding: 0 10px;
`;

const ItemsContainer = styled.View`
  border-color: #9e9e9e;
  border-width: 1px;
  border-bottom-width: 0;
  margin-top: 20px;
  ${Platform.OS === "web"
    ? "max-width: 700px; width: 100%;"
    : "align-self: stretch;"};
`;

const ItemContainer = styled.View`
  border-bottom-width: 1px;
  border-color: #9e9e9e;
  padding: 5px 10px;
`;

const ItemTitle = styled.Text`
  color: #689f38;
  font-size: 20px;
`;

const TopicsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TopicContainer = styled.View`
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 20px;
  margin-top: 5px;
  padding: 0 6px;
`;

const TopicIcon = styled.Image`
  height: 12px;
  margin-right: 4px;
  width: 12px;
`;

const TopicText = styled.Text`
  color: #fff;
  font-size: 13px;
`;

const HighlightedText = styled.Text`
  font-weight: bold;
`;

const HideSelected = styled.View`
  align-items: center;
  background: #2196f3;
  border-radius: 20px;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 20px 0 20px 19px;
  width: 40px;
`;

const HideSelectedImage = styled.Image`
  height: 25px;
  margin: 0 auto;
  width: 25px;
`;

const ContentContainer = styled.View`
  padding: 20px 10px;
`;

class Answers extends Component {
  state = {
    animSelectedRight: new Animated.Value(Dimensions.get("window").width),
    animListLeft: new Animated.Value(0),
    isLeft: false,
    list: ALL,
    search: "",
    selected: null
  };

  onSearchChange = search => {
    this.setState({
      search,
      list: ALL.filter(({ title, topics }) => {
        const lowerCaseSearch = search.toLowerCase();
        const matchesTitle =
          title.toLowerCase().indexOf(lowerCaseSearch) !== -1;
        const matchesTopics = some(
          topics,
          topic => topic.indexOf(lowerCaseSearch) !== -1
        );

        return matchesTitle || matchesTopics;
      })
    });
  };

  onItemSelect = item => {
    this.setState({ selected: item });
  };

  hideSelected = () => {
    this.setState({ selected: null });
  };

  renderTextWithHighlight(TextComponent, text, color) {
    const { search } = this.state;

    if (text.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return <TextComponent>{text}</TextComponent>;
    }

    const startIndex = text.toLowerCase().indexOf(search.toLowerCase());

    const before = text.slice(0, startIndex);
    const searchText = text.slice(startIndex, startIndex + search.length);
    const after = text.slice(startIndex + search.length);

    return (
      <TextComponent>
        {before}
        <HighlightedText style={{ color }}>{searchText}</HighlightedText>
        {after}
      </TextComponent>
    );
  }

  renderSelected() {
    const { selected } = this.state;

    return (
      <View>
        <TouchableOpacity onPress={this.hideSelected}>
          <HideSelected>
            <HideSelectedImage
              source={require("../images/icon-chevron-left.png")}
            />
          </HideSelected>
        </TouchableOpacity>
        <ContentContainer>
          <Markdown>{get(selected, "content", "")}</Markdown>
        </ContentContainer>
      </View>
    );
  }

  renderMain() {
    const { list, search } = this.state;

    const textInputStyles =
      Platform.OS === "web"
        ? {
            outline: "none",
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
            fontSize: 20,
            marginTop: 20,
            textAlign: "center",
            width: 300
          }
        : styles.searchInput;

    return (
      <View style={{ alignItems: "center", display: "flex" }}>
        <PageHeading>Answers</PageHeading>
        <TextInput
          onChangeText={this.onSearchChange}
          placeholder="Search"
          style={textInputStyles}
          value={search}
        />
        <ItemsContainer>
          {list.map((item, index) => {
            const { title, topics } = item;

            return (
              <TouchableOpacity
                key={index}
                onPress={partial(this.onItemSelect, item)}
              >
                <ItemContainer>
                  {this.renderTextWithHighlight(ItemTitle, title, "#333")}
                  <TopicsContainer>
                    {topics.map(topic => {
                      return (
                        <TopicContainer
                          key={topic}
                          style={{ backgroundColor: TOPIC_DATA[topic].color }}
                        >
                          <TopicIcon source={TOPIC_DATA[topic].icon} />
                          {this.renderTextWithHighlight(
                            TopicText,
                            topic,
                            "#84FFFF"
                          )}
                        </TopicContainer>
                      );
                    })}
                  </TopicsContainer>
                </ItemContainer>
              </TouchableOpacity>
            );
          })}
        </ItemsContainer>
      </View>
    );
  }

  render() {
    const { selected } = this.state;

    return (
      <AnswersContainer>
        <ScreenSwitcher
          isLeft={!!selected}
          leftContent={this.renderSelected()}
          rightContent={this.renderMain()}
        />
      </AnswersContainer>
    );
  }
}

export default Answers;

const styles = StyleSheet.create({
  searchInput: {
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    width: 300
  }
});
