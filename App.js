import React, { Component } from "react";

import { StatusBar, View } from "react-native";

import App from "./src/App";

class RNEntry extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <App />
      </View>
    );
  }
}

export default RNEntry;
