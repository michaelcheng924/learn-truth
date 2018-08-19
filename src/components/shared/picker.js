import React, { Component } from "react";
import styled from "styled-components/primitives";
import { partial } from "lodash";

import { Text, TouchableOpacity } from "react-native";

const PickerContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const PickerOptionContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  justify-content: center;
  padding: 0 10px;
`;

class Picker extends Component {
  renderOption(option) {
    const {
      itemActiveBackgroundColor,
      itemInactiveBackgroundColor,
      isActive,
      label,
      position,
      showBorderLeft,
      showBorderRight
    } = option;

    const {
      activeBackgroundColor,
      inactiveBackgroundColor,
      onChange
    } = this.props;

    let backgroundColor =
      itemInactiveBackgroundColor || inactiveBackgroundColor;
    let color = "#757575";

    if (isActive) {
      backgroundColor = itemActiveBackgroundColor || activeBackgroundColor;
      color = "#fff";
    }

    let borderTopLeftRadius = 0;
    let borderBottomLeftRadius = 0;
    let borderTopRightRadius = 0;
    let borderBottomRightRadius = 0;

    if (position === "left") {
      borderTopLeftRadius = 12;
      borderBottomLeftRadius = 12;
    } else if (position === "right") {
      borderTopRightRadius = 12;
      borderBottomRightRadius = 12;
    }

    return (
      <TouchableOpacity key={label} onPress={partial(onChange, label)}>
        <PickerOptionContainer
          style={{
            backgroundColor,
            borderColor: "#757575",
            borderLeftWidth: showBorderLeft ? 1 : 0,
            borderRightWidth: showBorderRight ? 1 : 0,
            borderTopLeftRadius,
            borderBottomLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius
          }}
        >
          <Text style={{ color }}>{label}</Text>
        </PickerOptionContainer>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <PickerContainer>
        {this.props.options.map(option => {
          return this.renderOption(option);
        })}
      </PickerContainer>
    );
  }
}

export default Picker;
