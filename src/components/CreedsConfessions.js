import React, { Component } from "react";
import styled from "styled-components/primitives";
import { get, partial } from "lodash";

import { Platform, Text, TouchableOpacity, View } from "react-native";
import {
  Heading,
  PageHeader,
  Picker,
  renderMarkdown,
  ScreenSwitcher,
  Txt,
  Width700
} from "./shared";

import { ALL_DOCUMENTS } from "../constants/creeds-confessions";

const BackText = styled.Text`
  color: #689f38;
  font-size: 18px;
  margin: 20px;
`;

const TableOfContentsText = styled.Text`
  color: #689f38;
  font-size: 18px;
  margin-top: 20px;
`;

const DocumentsContainer = styled.View`
  margin: 0 auto;
`;

const DocumentContainer = styled.View`
  border-color: #bdbdbd;
  border-width: 1px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const DocumentTitleContainer = styled.View`
  border-color: #bdbdbd;
  border-bottom-width: 1px;
  padding: 10px 20px;
`;

const DocumentTitle = styled.Text`
  color: #fff;
  font-size: 22px;
`;

const DocumentDescriptionContainer = styled.View`
  padding: 10px 20px;
`;

const ConfessionChapterList = styled.View`
  margin-top: 20px;
`;

const ConfessionChapterTitleText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ConfessionChapterParagraph = styled.Text`
  color: #000;
  font-size: 14px;
  font-style: italic;
  line-height: 28px;
  opacity: 0.84;
`;

class CreedsConfessions extends Component {
  state = {
    confessionContent: [],
    currentDocument: null,
    dropdownOpen: false,
    filter: "All",
    isLeft: false,
    list: ALL_DOCUMENTS,
    scriptures: null,
    selectedChapterIndex: null
  };

  scrollToTop = () => {
    if (Platform.OS === "web") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        this.props.scrollView.scrollTo({ y: 0, animated: true });
      });
    }
  };

  onFilterChange = filter => {
    this.setState({
      filter,
      list:
        filter === "All"
          ? ALL_DOCUMENTS
          : ALL_DOCUMENTS.filter(({ type }) => {
              return type === filter;
            })
    });
  };

  onDocumentSelect = document => {
    this.setState({
      currentDocument: document,
      isLeft: true,
      selectedChapterIndex: null
    });
  };

  onBack = () => {
    this.setState({ isLeft: false, selectedChapterIndex: null }, () => {
      setTimeout(() => {
        this.setState({ currentDocument: null });
      }, 250);
    });
  };

  onChapterSelect = index => {
    this.setState({
      selectedChapterIndex: index
    });

    this.scrollToTop();
  };

  renderBack = () => {
    return <BackText>← Back to all creeds and confessions</BackText>;
  };

  renderFilters() {
    const { filter } = this.state;

    return (
      <Picker
        options={[
          {
            isActive: filter === "Creeds",
            itemActiveBackgroundColor: "#673AB7",
            itemInactiveBackgroundColor: "#D1C4E9",
            label: "Creeds",
            position: "left",
            showBorderRight: filter === "All"
          },
          {
            isActive: filter === "Confessions",
            itemActiveBackgroundColor: "#26A69A",
            itemInactiveBackgroundColor: "#B2DFDB",
            label: "Confessions"
          },
          {
            isActive: filter === "All",
            itemActiveBackgroundColor: "#E91E63",
            itemInactiveBackgroundColor: "#F8BBD0",
            label: "All",
            position: "right",
            showBorderLeft: filter === "Creeds"
          }
        ]}
        onChange={this.onFilterChange}
      />
    );
  }

  renderDocuments() {
    return (
      <DocumentsContainer>
        {this.state.list.map(document => {
          let backgroundColor = "";

          if (document.type === "Creeds") {
            backgroundColor = "#673AB7";
          } else if (document.type === "Confessions") {
            backgroundColor = "#26A69A";
          }

          const year =
            document.year < 1000 ? `AD ${document.year}` : document.year;

          return (
            <TouchableOpacity
              key={document.name}
              onPress={partial(this.onDocumentSelect, document)}
            >
              <DocumentContainer>
                <DocumentTitleContainer style={{ backgroundColor }}>
                  <DocumentTitle>{`${document.name} (${document.yearText ||
                    year})`}</DocumentTitle>
                </DocumentTitleContainer>
                <DocumentDescriptionContainer>
                  <Txt noMargin>{document.description}</Txt>
                </DocumentDescriptionContainer>
              </DocumentContainer>
            </TouchableOpacity>
          );
        })}
      </DocumentsContainer>
    );
  }

  renderLeft() {
    return (
      <View>
        <PageHeader
          backgroundColor="#039BE5"
          title="Creeds and Confessions"
          subtitle="Learn the historic creeds and confessions of the church"
        />
        <Width700>
          {this.renderFilters()}
          {this.renderDocuments()}
        </Width700>
      </View>
    );
  }

  renderRight() {
    return (
      <Width700 style={{ marginBottom: 20 }}>
        <Heading first>{get(this.state.currentDocument, "name", "")}</Heading>
        {get(this.state.currentDocument, "contentType", "") === "render"
          ? this.state.currentDocument.content
          : this.renderConfession()}
      </Width700>
    );
  }

  renderConfession() {
    const { currentDocument, scriptures, selectedChapterIndex } = this.state;

    if (!currentDocument) {
      return null;
    }

    const chapter = currentDocument.content[selectedChapterIndex];

    if (selectedChapterIndex || selectedChapterIndex === 0) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ selectedChapterIndex: null })}
          >
            <TableOfContentsText>← Table of contents</TableOfContentsText>
          </TouchableOpacity>
          <ConfessionChapterList>
            <ConfessionChapterTitleText>
              {`${chapter.chapter}. ${chapter.title}`}
            </ConfessionChapterTitleText>
            {chapter.content.map((paragraph, paragraphIndex) => {
              if (!scriptures || scriptures.paragraphIndex !== paragraphIndex) {
                return (
                  <View key={paragraphIndex}>
                    <ConfessionChapterParagraph>
                      Paragraph {paragraphIndex + 1}
                    </ConfessionChapterParagraph>
                    <Text style={{ marginBottom: 20 }}>
                      {paragraph.map((section, index) => {
                        return (
                          <Text key={index}>
                            <Txt>{`${section.text} `}</Txt>
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({
                                  scriptures: {
                                    paragraphIndex,
                                    section
                                  }
                                })
                              }
                            >
                              <Txt
                                style={{
                                  color: "#689F38",
                                  fontStyle: "italic",
                                  opacity: 1,
                                  marginBottom: 0
                                }}
                              >{`${section.superscript} `}</Txt>
                            </TouchableOpacity>
                          </Text>
                        );
                      })}
                    </Text>
                  </View>
                );
              }

              const paragraph1 = paragraph.slice(
                0,
                scriptures.section.superscript
              );
              const paragraph2 = paragraph.slice(
                scriptures.section.superscript
              );

              return (
                <View key={paragraphIndex}>
                  <ConfessionChapterParagraph>
                    Paragraph {paragraphIndex + 1}
                  </ConfessionChapterParagraph>
                  {paragraph1.map((section, index) => {
                    return (
                      <View key={index}>
                        <Text style={{ marginBottom: 20 }}>
                          <Txt>{`${section.text} `}</Txt>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                scriptures: {
                                  paragraphIndex,
                                  section
                                }
                              })
                            }
                          >
                            <Txt
                              style={{
                                color: "#689F38",
                                fontStyle: "italic",
                                opacity: 1,
                                marginBottom: 0
                              }}
                            >{`${section.superscript} `}</Txt>
                          </TouchableOpacity>
                        </Text>
                        {index + 1 === scriptures.section.superscript ? (
                          <Txt>{scriptures.section.scriptures}</Txt>
                        ) : null}
                      </View>
                    );
                  })}
                  <Text style={{ marginBottom: 20 }}>
                    {paragraph2.map((section, index) => {
                      return (
                        <Text key={index}>
                          <Txt>{`${section.text} `}</Txt>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                scriptures: {
                                  paragraphIndex,
                                  section
                                }
                              })
                            }
                          >
                            <Txt
                              style={{
                                color: "#689F38",
                                fontStyle: "italic",
                                opacity: 1,
                                marginBottom: 0
                              }}
                            >{`${section.superscript} `}</Txt>
                          </TouchableOpacity>
                        </Text>
                      );
                    })}
                  </Text>
                </View>
              );
            })}
          </ConfessionChapterList>
        </View>
      );
    }

    return (
      <ConfessionChapterList>
        {currentDocument.content.map((item, index) => {
          return (
            <View key={item.title}>
              <TouchableOpacity onPress={partial(this.onChapterSelect, index)}>
                <ConfessionChapterTitleText style={{ color: "#689F38" }}>
                  {`${item.chapter}. ${item.title}`}
                </ConfessionChapterTitleText>
              </TouchableOpacity>
            </View>
          );
        })}
      </ConfessionChapterList>
    );
  }

  render() {
    return (
      <ScreenSwitcher
        isLeft={!!this.state.isLeft}
        leftContent={this.renderLeft()}
        onBack={this.onBack}
        renderBack={this.renderBack}
        rightContent={this.renderRight()}
        scrollUp={this.props.scrollUp}
      />
    );
  }
}

export default CreedsConfessions;
