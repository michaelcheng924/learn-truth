import React, { Component } from "react";
import styled from "styled-components/primitives";
import { defer, every, shuffle, some } from "lodash";

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
import { PageHeader, Picker, Width700 } from "../shared";

import {
  BOYS_GIRLS,
  BOYS_GIRLS_SPANISH,
  WESTMINSTER_SHORTER,
  WESTMINSTER_SHORTER_SPANISH
} from "../../constants/catechism-practice";
import FullAnswer from "./FullAnswer";
import FillInTheBlank from "./FillInTheBlank";
import MultipleChoice from "./MultipleChoice";

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
    multipleChoiceOptions: [],
    number: 1,
    numberInput: 1,
    showAnswer: false,
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

  componentDidUpdate(prevProps, prevState) {
    const {
      catechism,
      language,
      mode,
      number,
      correct,
      thumbsOpacityAnim,
      thumbsRightAnim
    } = this.state;

    if (!prevState.correct && correct) {
      Animated.timing(thumbsOpacityAnim, {
        toValue: 1,
        duration: 200
      }).start();

      Animated.spring(thumbsRightAnim, {
        toValue: 200,
        duration: 200,
        friction: 5
      }).start();
    }

    if (
      prevState.catechism !== catechism ||
      prevState.language !== language ||
      prevState.mode !== mode ||
      prevState.number !== number
    ) {
      this.setState({ multipleChoiceOptions: this.getOptions() });
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

  getOptions(forceNumber) {
    const { number } = this.state;

    const catechism = this.getCatechism();

    const options = [forceNumber || number];

    let newNumber;
    const max = catechism.length;

    function addNewNumber() {
      newNumber = Math.round(Math.random() * 10) + number - 5;
      if (
        !some(options, option => option === newNumber) &&
        newNumber >= 1 &&
        newNumber <= max
      ) {
        options.push(newNumber);
      }
    }

    while (options.length < 4) {
      addNewNumber();
    }

    return shuffle(
      options.map(option => {
        return catechism[option - 1].answer;
      })
    );
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

    this.setState({
      catechism,
      language,
      correct: false,
      fillAnswers: [],
      number: 1,
      numberInput: String(1)
    });
  };

  onNavigationNumberChange = input => {
    this.setState({ numberInput: input });
  };

  onNavigationNumberSubmit = () => {
    this.resetAnimation();

    const { number, numberInput } = this.state;
    const input = Number(numberInput);

    const catechism = this.getCatechism();

    if (input >= 1 && input <= catechism.length) {
      this.setState({
        answer: "",
        correct: false,
        fillAnswers: [],
        number: input
      });
    } else {
      this.setState({ numberInput: String(number) });
    }
  };

  onCatechismChange = catechism => {
    this.setState({
      catechism,
      correct: false,
      fillAnswers: [],
      number: 1,
      numberInput: String(1)
    });
  };

  onModeChange = mode => {
    this.resetAnimation();

    this.setState(
      {
        mode,
        number: 1,
        answer: "",
        correct: false,
        fillAnswers: []
      },
      () => {
        this.focusInput(mode);
      }
    );
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

  onMultipleChoiceSelect = answer => {
    const { number } = this.state;

    const catechism = this.getCatechism();

    const simpleAnswer = this.getSimpleAnswer(answer);
    const actualAnswer = this.getSimpleAnswer(catechism[number - 1].answer);

    const correct = simpleAnswer === actualAnswer;

    this.setState({
      answer,
      correct
    });
  };

  renderLanguagePicker() {
    const { language } = this.state;

    return (
      <Picker
        options={[
          {
            isActive: language === "English",
            label: "English",
            position: "left"
          },
          {
            isActive: language === "Español",
            label: "Español",
            position: "right"
          }
        ]}
        activeBackgroundColor="#6D4C41"
        inactiveBackgroundColor="#D7CCC8"
        onChange={this.onLanguageChange}
      />
    );
  }

  renderCatechismPicker() {
    const { catechism, language } = this.state;

    const isEnglish = language === "English";

    const isBoysGirls =
      catechism === "Boys and Girls" || catechism === "El Catecismo Infantil";
    const isWestminster =
      catechism === "Westminster Shorter" || catechism === "El Catecismo Menor";

    return (
      <Picker
        options={[
          {
            isActive: isBoysGirls,
            label: isEnglish ? "Boys and Girls" : "El Catecismo Infantil",
            position: "left"
          },
          {
            isActive: isWestminster,
            label: isEnglish ? "Westminster Shorter" : "El Catecismo Menor",
            position: "right"
          }
        ]}
        activeBackgroundColor="#FF5722"
        inactiveBackgroundColor="#FFCCBC"
        onChange={this.onCatechismChange}
      />
    );
  }

  renderModePicker() {
    const { mode } = this.state;

    return (
      <Picker
        options={[
          {
            isActive: mode === "Multiple choice",
            label: "Multiple choice",
            position: "left",
            showBorderRight: mode === "Full answer"
          },
          {
            isActive: mode === "Fill in the blank",
            label: "Fill in the blank"
          },
          {
            isActive: mode === "Full answer",
            label: "Full answer",
            position: "right",
            showBorderLeft: mode === "Multiple choice"
          }
        ]}
        activeBackgroundColor="#009688"
        inactiveBackgroundColor="#B2DFDB"
        onChange={this.onModeChange}
      />
    );
  }

  renderShowAnswer() {
    const { showAnswer } = this.state;

    let backgroundColor = "#C8E6C9";
    let color = "#757575";

    if (showAnswer) {
      backgroundColor = "#43A047";
      color = "#fff";
    }

    return (
      <TouchableOpacity
        onPress={() => this.setState({ showAnswer: !showAnswer })}
      >
        <CatechismOptionContainer
          style={{
            backgroundColor,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            marginBottom: 20
          }}
        >
          <Text style={{ color }}>Show answer</Text>
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
    const {
      answer,
      correct,
      fillAnswers,
      mode,
      multipleChoiceOptions,
      number,
      showAnswer
    } = this.state;

    const catechism = this.getCatechism();

    if (correct) {
      return this.renderCorrect();
    }

    let content = null;

    if (mode === "Multiple choice") {
      content = (
        <MultipleChoice
          answer={answer}
          onMultipleChoiceSelect={this.onMultipleChoiceSelect}
          options={multipleChoiceOptions}
        />
      );
    }

    if (mode === "Fill in the blank") {
      content = (
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
      content = (
        <FullAnswer
          answer={answer}
          onAnswerChange={this.onAnswerChange}
          ref={fullAnswer => (this.fullAnswer = fullAnswer)}
        />
      );
    }

    return (
      <View>
        {showAnswer ? (
          <CatechismCorrectText
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 0
            }}
          >
            {catechism[number - 1].answer}
          </CatechismCorrectText>
        ) : null}
        {content}
      </View>
    );
  }

  renderCorrect() {
    const { thumbsOpacityAnim, thumbsRightAnim } = this.state;

    const catechism = this.getCatechism();

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
        <View>
          <PageHeader
            backgroundColor="#FF5722"
            title="Catechism Practice"
            subtitle="Questions and answers to learn the Bible's teachings. Great for
          families and children."
          />
          <Width700 center>
            {this.renderLanguagePicker()}
            {this.renderCatechismPicker()}
            {this.renderModePicker()}
            <CatechismSwitcher>{this.renderShowAnswer()}</CatechismSwitcher>
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
          </Width700>
        </View>
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
