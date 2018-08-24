import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Platform } from "react-native";

const Width700 = styled.View`
  margin: 0 auto;
  padding: 0 20px;
  ${Platform.OS === "web"
    ? "max-width: 740px; width: 100%;"
    : "align-self: stretch;"};
`;

const Heading = styled.Text`
  color: #000;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 15px;
  opacity: 0.84;
`;

const Text = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 21px;
  opacity: 0.84;
`;

const OLListContainer = styled.View`
  margin-left: 20px;
`;

const OLItem = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

class OL extends Component {
  render() {
    return (
      <OLListContainer>
        {this.props.list.map((item, index) => {
          return (
            <OLItem key={index}>
              <Text
                style={{
                  flexShrink: 0,
                  fontStyle: "italic",
                  marginBottom: 0,
                  width: 20
                }}
              >
                {item.number}.
              </Text>
              <Text style={{ marginBottom: 0 }}>{item.text}</Text>
            </OLItem>
          );
        })}
      </OLListContainer>
    );
  }
}

export { Heading, OL, Text, Width700 };
