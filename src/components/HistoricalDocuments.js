import React, { Component } from "react";
import styled from "styled-components/primitives";
import { get, partial } from "lodash";

import { Platform, TouchableOpacity } from "react-native";
import {
  Markdown,
  PageHeading,
  PageSubtitle,
  Picker,
  ScreenSwitcher,
  Text
} from "./shared";

import { ALL_DOCUMENTS } from "../constants/historical-documents";

const HistoricalDocumentsContainer = styled.View`
  align-items: center;
  display: flex;
  padding: 0 20px 20px;
`;

const DocumentsContainer = styled.View`
  margin: 0 auto;
  ${Platform.OS === "web"
    ? "max-width: 700px; width: 100%;"
    : "align-self: stretch;"};
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

class HistoricalDocuments extends Component {
  state = {
    currentDocument: null,
    dropdownOpen: false,
    filter: "All",
    isLeft: false,
    list: ALL_DOCUMENTS,
    selectedIndex: 0
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
      selectedIndex: 0
    });
  };

  onBack = () => {
    this.setState({ isLeft: false, selectedIndex: 0 }, () => {
      setTimeout(() => {
        this.setState({ currentDocument: null });
      }, 250);
    });
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
      <HistoricalDocumentsContainer>
        <PageHeading style={{ marginBottom: 0, marginTop: 0 }}>
          {get(this.state.currentDocument, "name", "")}
        </PageHeading>
        <Markdown
          styles={{
            Text: { color: "#000", fontSize: 18, lineHeight: 28, opacity: 0.84 }
          }}
        >
          {get(this.state.currentDocument, "content", "")}
        </Markdown>
      </HistoricalDocumentsContainer>
    );
  }

  renderRight() {
    return (
      <HistoricalDocumentsContainer>
        <PageHeading>Historical Documents</PageHeading>
        <PageSubtitle>
          Learn the historic creeds, confessions, and councils of the church
        </PageSubtitle>
        {this.renderFilters()}
        {this.renderDocuments()}
      </HistoricalDocumentsContainer>
    );
  }

  render() {
    return (
      <ScreenSwitcher
        isLeft={!!this.state.isLeft}
        leftContent={this.renderLeft()}
        onBack={this.onBack}
        rightContent={this.renderRight()}
      />
    );
  }
}

export default HistoricalDocuments;
