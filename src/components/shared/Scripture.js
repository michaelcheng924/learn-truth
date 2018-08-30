import React, { Component } from "react";

import { View } from "react-native";
import { B, Quote } from "./index";

class Scripture extends Component {
  render() {
    const { reference, text } = this.props;

    const splitText = text.split(" ");

    const mappedText = splitText.map((word, index) => {
      let finalWord;

      if (Number(word) < 100) {
        finalWord = <B>{`${word} `}</B>;
      } else {
        finalWord = `${word} `;
      }

      if (index === splitText.length - 1) {
        finalWord = word.slice(0, word.length);
      }

      return finalWord;
    });

    return (
      <View>
        <Quote first>
          <B>{reference}</B>
        </Quote>
        <Quote first>{mappedText}</Quote>
      </View>
    );
  }
}

export default Scripture;
