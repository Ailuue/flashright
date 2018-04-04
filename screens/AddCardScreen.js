import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";
import { addCard } from "../utils/api";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

class AddCardScreen extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionChange = question => {
    this.setState({ question });
  };

  handleAnswerChange = answer => {
    this.setState({ answer });
  };

  onSubmit = () => {
    const { deck } = this.props.navigation.state.params;
    addCard(deck, this.state.question, this.state.answer);
    this.props.navigation.navigate("Deck");
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text>Create a Question and Answer</Text>
        <TextInput
          style={styles.input}
          placeholder="Question"
          value={question}
          onChangeText={text => this.handleQuestionChange(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Answer"
          value={answer}
          onChangeText={text => this.handleAnswerChange(text)}
        />
        <Button title="Create" onPress={() => this.onSubmit()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginTop: 100,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    width: WINDOW_WIDTH * 0.9,
    height: 40
  }
});
export default AddCardScreen;
