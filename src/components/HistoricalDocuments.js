import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform, TouchableOpacity, View } from "react-native";
import {
  PageHeading,
  PageSubtitle,
  Picker,
  ScreenSwitcher,
  Text
} from "./shared";

import { ALL_DOCUMENTS } from "../constants/historical-documents";

const HistoricalDocumentsContainer = styled.View`
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
        {this.state.list.map(({ type, name, description, year }) => {
          let backgroundColor = "";

          if (type === "Creeds") {
            backgroundColor = "#039BE5";
          } else if (type === "Confessions") {
            backgroundColor = "#0097A7";
          }

          return (
            <TouchableOpacity
              key={name}
              onPress={() =>
                this.setState({ currentDocument: document, selectedIndex: 0 })
              }
            >
              <DocumentContainer>
                <DocumentTitleContainer style={{ backgroundColor }}>
                  <DocumentTitle>{name}</DocumentTitle>
                </DocumentTitleContainer>
                <DocumentDescriptionContainer>
                  <Text>{year}</Text>
                  <Text style={{ marginBottom: 0 }}>{description}</Text>
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
        <Text>BLAHBLAH</Text>
      </View>
    );
  }

  renderRight() {
    return (
      <View style={{ alignItems: "center", display: "flex" }}>
        <PageHeading>Historical Documents</PageHeading>
        <PageSubtitle>
          Learn the historic creeds, confessions, and councils of the church
        </PageSubtitle>
        {this.renderFilters()}
        {this.renderDocuments()}
      </View>
    );
  }

  render() {
    return (
      <HistoricalDocumentsContainer>
        <ScreenSwitcher
          leftContent={this.renderLeft()}
          rightContent={this.renderRight()}
        />
        {/* {this.renderDropdown()} */}
      </HistoricalDocumentsContainer>
    );
  }
}

export default HistoricalDocuments;
