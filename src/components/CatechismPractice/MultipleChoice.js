import React, { Component } from "react";
import styled from "styled-components/primitives";
import { partial } from "lodash";

import { TouchableOpacity } from "react-native";

const LETTER_MAP = {
  0: "A",
  1: "B",
  2: "C",
  3: "D"
};

const CatechismAnswer = styled.View`
  padding: 20px;
  position: relative;
`;

const CatechismMCOption = styled.View`
  border-color: #333;
  border-radius: 15px;
  border-width: 1px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 7px 16px;
`;

const CatechismMCText = styled.Text``;

export default class MultipleChoice extends Component {
  render() {
    const { answer, onMultipleChoiceSelect, options } = this.props;

    return (
      <CatechismAnswer>
        {options.map((option, index) => {
          const optionStyles = {};

          if (option === answer) {
            optionStyles.backgroundColor = "#FFCDD2";
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={partial(onMultipleChoiceSelect, option)}
            >
              <CatechismMCOption key={index} style={optionStyles}>
                <CatechismMCText>
                  {`${LETTER_MAP[index]}. ${option}`}
                </CatechismMCText>
              </CatechismMCOption>
            </TouchableOpacity>
          );
        })}
      </CatechismAnswer>
    );
  }
}
