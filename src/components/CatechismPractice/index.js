import React, { Component } from "react";
import styled from "styled-components/primitives";
import { defer, every, partial } from "lodash";

import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { PageHeading, PageSubtitle } from "../shared";

import {
  BOYS_GIRLS,
  BOYS_GIRLS_SPANISH,
  WESTMINSTER_SHORTER,
  WESTMINSTER_SHORTER_SPANISH
} from "../../constants/catechism-practice";
import FullAnswer from "./FullAnswer";
import FillInTheBlank from "./FillInTheBlank";

const CatechismPracticeContainer = styled.View`
  align-items: center;
  display: flex;
  padding: 0 20px 20px;
`;

const CatechismSwitcher = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CatechismOptionContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  justify-content: center;
  padding: 0 10px;
`;

const CatechismNavigation = styled.View`
  align-items: center;
  background: #424242;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 20px;
  width: 350px;
`;

const CatechismNavigationArrow = styled.Image`
  height: 20px;
  width: 20px;
`;

const CatechismCard = styled.View`
  width: 350px;
`;

const CatechismAnswer = styled.View`
  padding: 20px;
  position: relative;
`;

const CatechismQuestion = styled.Text`
  background: #7f8c8d;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
`;

const CatechismCorrectText = styled.Text`
  color: #43a047;
  margin-bottom: 20px;
`;

const CatechismCorrectButton = styled.Text`
  background: #43a047;
  color: #fff;
  padding: 10px 20px;
  width: 70px;
`;

const CatechismCorrectImage = styled.Image`
  height: 40px;
  width: 40px;
`;

class CatechismPractice extends Component {
  state = {
    answer: "",
    catechism: "Boys and Girls",
    fillAnswers: [],
    language: "English",
    mode: "Fill in the blank",
    number: 1,
    numberInput: 1,
    thumbsOpacityAnim: new Animated.Value(0),
    thumbsRightAnim: new Animated.Value(0)
  };

  componentDidMount() {
    this.focusInput();

    if (Platform.OS === "web") {
      document.addEventListener("keydown", event => {
        const { number } = this.state;

        const catechism = this.getCatechism();

        if (this.state.correct && event.which === 13) {
          this.onNext();
        }
        if (event.which === 37 && number > 1) {
          this.onPrevious();
        }
        if (event.which === 39 && number < catechism.length) {
          this.onNext();
        }
      });
    }
  }

  getCatechism() {
    switch (this.state.catechism) {
      case "Boys and Girls":
        return BOYS_GIRLS;
      case "Westminster Shorter":
        return WESTMINSTER_SHORTER;
      case "El Catecismo Infantil":
        return BOYS_GIRLS_SPANISH;
      case "El Catecismo Menor":
        return WESTMINSTER_SHORTER_SPANISH;
      default:
        return BOYS_GIRLS;
    }
  }

  getSimpleAnswer(string) {
    if (!string) {
      return "";
    }

    let finalString = string;

    if (this.state.language === "espanol") {
      finalString = finalString.replace("á", "a");
      finalString = finalString.replace("é", "e");
      finalString = finalString.replace("í", "i");
      finalString = finalString.replace("ó", "o");
      finalString = finalString.replace("á", "a");
      finalString = finalString.replace("ñ", "n");
    }

    return finalString.replace(/[^a-zA-Z ]/gm, "").toLowerCase();
  }

  onLanguageChange = language => {
    let catechism = this.state.catechism;

    if (language === "Español") {
      if (catechism === "Boys and Girls") {
        catechism = "El Catecismo Infantil";
      } else if (catechism === "Westminster Shorter") {
        catechism = "El Catecismo Menor";
      }
    } else if (language === "English") {
      if (catechism === "El Catecismo Infantil") {
        catechism = "Boys and Girls";
      } else if (catechism === "El Catecismo Menor") {
        catechism = "Westminster Shorter";
      }
    }

    this.setState({ catechism, language });
  };

  onNavigationNumberChange = input => {
    this.setState({ numberInput: input });
  };

  onNavigationNumberSubmit = () => {
    const { number, numberInput } = this.state;
    const input = Number(numberInput);

    const catechism = this.getCatechism();

    if (input >= 1 && input <= catechism.length) {
      this.setState({ number: input });
    } else {
      this.setState({ numberInput: String(number) });
    }
  };

  onCatechismChange = catechism => {
    this.setState({ catechism });
  };

  onModeChange = mode => {
    this.setState({ mode }, () => {
      this.focusInput(mode);
    });
  };

  resetAnimation() {
    Animated.timing(this.state.thumbsOpacityAnim, {
      toValue: 0,
      duration: 0
    }).start();
    Animated.timing(this.state.thumbsRightAnim, {
      toValue: 0,
      duration: 0
    }).start();
  }

  focusInput(newMode) {
    const { mode } = this.state;

    const finalMode = newMode || mode;

    defer(() => {
      if (finalMode === "Full answer") {
        this.fullAnswer.answerInput.focus();
      } else if (finalMode === "Fill in the blank") {
        this.fillInTheBlank.blankInputs[0].focus();
      }
    });
  }

  onNext = () => {
    this.resetAnimation();

    const newNumber = this.state.number + 1;

    this.setState(
      {
        answer: "",
        correct: false,
        fillAnswers: [],
        number: newNumber,
        numberInput: String(newNumber)
      },
      () => {
        this.focusInput();
      }
    );
  };

  onPrevious = () => {
    this.resetAnimation();

    const newNumber = this.state.number - 1;

    this.setState(
      {
        answer: "",
        correct: false,
        fillAnswers: [],
        number: newNumber,
        numberInput: String(newNumber)
      },
      () => {
        this.focusInput();
      }
    );
  };

  onAnswerChange = answer => {
    const { number } = this.state;

    const catechism = this.getCatechism();

    const actualAnswer = catechism[number - 1].answer;

    const correct =
      this.getSimpleAnswer(answer) === this.getSimpleAnswer(actualAnswer);

    this.setState({
      answer,
      correct
    });
  };

  onBlankChange = (index, answer) => {
    const { fillAnswers, number } = this.state;

    const catechism = this.getCatechism();
    const fillAnswer = catechism[number - 1].fillAnswer;

    const correct =
      this.getSimpleAnswer(fillAnswer[index]) === this.getSimpleAnswer(answer);

    fillAnswers[index] = {
      answer,
      correct
    };

    const allCorrect =
      fillAnswers.length === fillAnswer.length &&
      every(fillAnswers, fillAnswer => fillAnswer && fillAnswer.correct);

    this.setState({ fillAnswers, correct: allCorrect });

    if (correct && index < fillAnswer.length - 1) {
      this.fillInTheBlank.blankInputs[index + 1].focus();
    }
  };

  renderLanguageOption(label, isLeft) {
    let backgroundColor = "#D7CCC8";
    let color = "#757575";

    if (this.state.language === label) {
      backgroundColor = "#6D4C41";
      color = "#fff";
    }

    return (
      <TouchableOpacity onPress={partial(this.onLanguageChange, label)}>
        <CatechismOptionContainer
          style={{
            backgroundColor,
            borderTopLeftRadius: isLeft ? 12 : 0,
            borderBottomLeftRadius: isLeft ? 12 : 0,
            borderTopRightRadius: isLeft ? 0 : 12,
            borderBottomRightRadius: isLeft ? 0 : 12
          }}
        >
          <Text style={{ color, fontSize: 14 }}>{label}</Text>
        </CatechismOptionContainer>
      </TouchableOpacity>
    );
  }

  renderCatechismOption(label, isLeft) {
    let finalLabel = label;

    if (this.state.language === "Español") {
      if (label === "Boys and Girls") {
        finalLabel = "El Catecismo Infantil";
      } else if (label === "Westminster Shorter") {
        finalLabel = "El Catecismo Menor";
      }
    }

    let backgroundColor = "#FFCCBC";
    let color = "#757575";

    if (this.state.catechism === finalLabel) {
      backgroundColor = "#FF5722";
      color = "#fff";
    }

    return (
      <TouchableOpacity onPress={partial(this.onCatechismChange, finalLabel)}>
        <CatechismOptionContainer
          style={{
            backgroundColor,
            borderTopLeftRadius: isLeft ? 12 : 0,
            borderBottomLeftRadius: isLeft ? 12 : 0,
            borderTopRightRadius: isLeft ? 0 : 12,
            borderBottomRightRadius: isLeft ? 0 : 12
          }}
        >
          <Text style={{ color }}>{finalLabel}</Text>
        </CatechismOptionContainer>
      </TouchableOpacity>
    );
  }

  renderModeOption(label, position) {
    const { mode } = this.state;

    let backgroundColor = "#B2DFDB";
    let color = "#757575";

    if (mode === label) {
      backgroundColor = "#009688";
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
      <TouchableOpacity onPress={partial(this.onModeChange, label)}>
        <CatechismOptionContainer
          style={{
            backgroundColor,
            borderColor: "#757575",
            borderLeftWidth:
              position === "right" && mode === "Multiple choice" ? 1 : 0,
            borderRightWidth:
              position === "left" && mode === "Full answer" ? 1 : 0,
            borderTopLeftRadius,
            borderBottomLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            marginBottom: 20
          }}
        >
          <Text style={{ color }}>{label}</Text>
        </CatechismOptionContainer>
      </TouchableOpacity>
    );
  }

  renderNavigation() {
    const { number } = this.state;

    const catechism = this.getCatechism();

    return (
      <CatechismNavigation>
        {number > 1 ? (
          <TouchableOpacity onPress={this.onPrevious}>
            <CatechismNavigationArrow
              source={require("../../images/icon-chevron-left.png")}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 20 }} />
        )}
        <TextInput
          onBlur={this.onNavigationNumberSubmit}
          onChangeText={this.onNavigationNumberChange}
          selectTextOnFocus
          style={styles.navigationInput}
          underlineColorAndroid="rgba(0,0,0,0)"
          value={String(this.state.numberInput)}
        />
        {number < catechism.length ? (
          <TouchableOpacity onPress={this.onNext}>
            <CatechismNavigationArrow
              source={require("../../images/icon-chevron-right.png")}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 20 }} />
        )}
      </CatechismNavigation>
    );
  }

  renderAnswer() {
    const { answer, correct, fillAnswers, mode, number } = this.state;

    const catechism = this.getCatechism();

    if (correct) {
      return this.renderCorrect();
    }

    if (mode === "Fill in the blank") {
      return (
        <FillInTheBlank
          fillAnswers={fillAnswers}
          number={number}
          onBlankChange={this.onBlankChange}
          question={catechism[number - 1].fillQuestion}
          ref={fillInTheBlank => (this.fillInTheBlank = fillInTheBlank)}
        />
      );
    }

    if (mode === "Full answer") {
      return (
        <FullAnswer
          answer={answer}
          onAnswerChange={this.onAnswerChange}
          ref={fullAnswer => (this.fullAnswer = fullAnswer)}
        />
      );
    }
  }

  renderCorrect() {
    const { thumbsOpacityAnim, thumbsRightAnim } = this.state;

    const catechism = this.getCatechism();

    Animated.timing(thumbsOpacityAnim, {
      toValue: 1,
      duration: 200
    }).start();

    Animated.spring(thumbsRightAnim, {
      toValue: 200,
      duration: 200,
      friction: 5
    }).start();

    return (
      <CatechismAnswer>
        <CatechismCorrectText>
          {catechism[this.state.number - 1].answer}
        </CatechismCorrectText>
        <TouchableOpacity onPress={this.onNext} style={{ width: 70 }}>
          <CatechismCorrectButton>Next</CatechismCorrectButton>
        </TouchableOpacity>
        <Animated.View
          style={{
            opacity: thumbsOpacityAnim,
            position: "absolute",
            bottom: 20,
            right: thumbsRightAnim
          }}
        >
          <CatechismCorrectImage
            source={require("../../images/thumbs-up.png")}
          />
        </Animated.View>
      </CatechismAnswer>
    );
  }

  render() {
    const { correct, number } = this.state;

    const catechism = this.getCatechism();

    const cardQuestionStyles = correct
      ? {
          color: "#fff",
          backgroundColor: "#43A047"
        }
      : {};

    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={200}>
        <CatechismPracticeContainer>
          <PageHeading>Catechism Practice</PageHeading>
          <PageSubtitle>
            Questions and answers to learn the Bible's teachings. Great for
            families and children.
          </PageSubtitle>
          <CatechismSwitcher>
            {this.renderLanguageOption("English", true)}
            {this.renderLanguageOption("Español")}
          </CatechismSwitcher>
          <CatechismSwitcher>
            {this.renderCatechismOption("Boys and Girls", true)}
            {this.renderCatechismOption("Westminster Shorter")}
          </CatechismSwitcher>
          <CatechismSwitcher>
            {this.renderModeOption("Multiple choice", "left")}
            {this.renderModeOption("Fill in the blank")}
            {this.renderModeOption("Full answer", "right")}
          </CatechismSwitcher>
          <View style={styles.catechismCardContainer1}>
            <View style={styles.catechismCardContainer2}>
              <CatechismCard>
                {this.renderNavigation()}
                <CatechismQuestion style={cardQuestionStyles}>
                  {catechism[number - 1].question}
                </CatechismQuestion>
                {this.renderAnswer()}
              </CatechismCard>
            </View>
          </View>
        </CatechismPracticeContainer>
      </KeyboardAvoidingView>
    );
  }
}

export default CatechismPractice;

const styles = StyleSheet.create({
  navigationInput: {
    backgroundColor: "#fff",
    borderRadius: 3,
    fontSize: 20,
    textAlign: "center",
    width: 45
  },
  catechismCardContainer1: {
    backgroundColor: "#fff",
    elevation: 20,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2
  },
  catechismCardContainer2: {
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.19
  }
});
