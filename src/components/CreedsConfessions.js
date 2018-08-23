import React, { Component } from "react";
import styled from "styled-components/primitives";
import { get, partial } from "lodash";

import { Platform, Text as RNText, TouchableOpacity, View } from "react-native";
import {
  PageHeading,
  PageSubtitle,
  Picker,
  renderMarkdown,
  ScreenSwitcher,
  Text
} from "./shared";

import { ALL_DOCUMENTS } from "../constants/creeds-confessions";

const CreedsConfessionsContainer = styled.View`
  margin: 0 auto;
  ${Platform.OS === "web"
    ? "max-width: 720px; width: 100%;"
    : "align-self: stretch;"};
`;

const ContentContainer = styled.View`
  align-items: center;
  display: flex;
  padding: 0 10px 20px;
`;

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

    this.scrollToTop();
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
            itemActiveBackgroundColor: "#039BE5",
            itemInactiveBackgroundColor: "#B3E5FC",
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
            backgroundColor = "#039BE5";
          } else if (document.type === "Confessions") {
            backgroundColor = "#0097A7";
          }

          return (
            <TouchableOpacity
              key={document.name}
              onPress={partial(this.onDocumentSelect, document)}
            >
              <DocumentContainer>
                <DocumentTitleContainer style={{ backgroundColor }}>
                  <DocumentTitle>{document.name}</DocumentTitle>
                </DocumentTitleContainer>
                <DocumentDescriptionContainer>
                  <Text>{document.year}</Text>
                  <Text style={{ marginBottom: 0 }}>
                    {document.description}
                  </Text>
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
      <CreedsConfessionsContainer>
        <ContentContainer>
          <PageHeading>Historical Documents</PageHeading>
          <PageSubtitle>
            Learn the historic creeds, confessions, and councils of the church
          </PageSubtitle>
          {this.renderFilters()}
          {this.renderDocuments()}
        </ContentContainer>
      </CreedsConfessionsContainer>
    );
  }

  renderRight() {
    return (
      <CreedsConfessionsContainer>
        <ContentContainer>
          <PageHeading style={{ marginTop: 0 }}>
            {get(this.state.currentDocument, "name", "")}
          </PageHeading>
          {get(this.state.currentDocument, "type", "") === "Creeds"
            ? renderMarkdown(get(this.state.currentDocument, "content", ""))
            : this.renderConfession()}
        </ContentContainer>
      </CreedsConfessionsContainer>
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
                    <RNText style={{ marginBottom: 20 }}>
                      {paragraph.map((section, index) => {
                        return (
                          <RNText key={index}>
                            <Text>{`${section.text} `}</Text>
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
                              <Text
                                style={{
                                  color: "#689F38",
                                  fontStyle: "italic",
                                  opacity: 1,
                                  marginBottom: 0
                                }}
                              >{`${section.superscript} `}</Text>
                            </TouchableOpacity>
                          </RNText>
                        );
                      })}
                    </RNText>
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
                        <RNText style={{ marginBottom: 20 }}>
                          <Text>{`${section.text} `}</Text>
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
                            <Text
                              style={{
                                color: "#689F38",
                                fontStyle: "italic",
                                opacity: 1,
                                marginBottom: 0
                              }}
                            >{`${section.superscript} `}</Text>
                          </TouchableOpacity>
                        </RNText>
                        {index + 1 === scriptures.section.superscript ? (
                          <Text>{scriptures.section.scriptures}</Text>
                        ) : null}
                      </View>
                    );
                  })}
                  <RNText style={{ marginBottom: 20 }}>
                    {paragraph2.map((section, index) => {
                      return (
                        <RNText key={index}>
                          <Text>{`${section.text} `}</Text>
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
                            <Text
                              style={{
                                color: "#689F38",
                                fontStyle: "italic",
                                opacity: 1,
                                marginBottom: 0
                              }}
                            >{`${section.superscript} `}</Text>
                          </TouchableOpacity>
                        </RNText>
                      );
                    })}
                  </RNText>
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
      />
    );
  }
}

export default CreedsConfessions;
