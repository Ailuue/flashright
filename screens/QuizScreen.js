import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
class QuizScreen extends Component {
  state = {
    deck: null,
    current: null,
    answer: false,
    score: 0
  };

  componentWillMount() {
    this.setState({
      deck: this.props.navigation.state.params.deck,
      current: this.props.navigation.state.params.deck.cards[0]
    });
  }

  nextCard = score => {
    const index = this.state.deck.cards.findIndex(
      value => value === this.state.current
    );
    if (index === this.state.deck.cards.length - 1) {
      this.props.navigation.navigate("Results", {
        deck: this.state.deck,
        score: score === "correct" ? this.state.score + 1 : this.state.score
      });
      this.setState({ score: 0 });
    } else {
      this.setState(prevState => {
        return {
          current: this.state.deck.cards[index + 1],
          answer: false,
          score: score === "correct" ? prevState.score + 1 : prevState.score
        };
      });
    }
  };

  render() {
    const { deck, answer, current } = this.state;
    if (!answer) {
      return (
        <View style={styles.container}>
          <Text style={styles.QA}>{current.question}</Text>
          <Button
            title="show answer"
            onPress={() => this.setState({ answer: true })}
          >
            Show Answer
          </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.QA}>{current.answer}</Text>
          <Button
            title="Correct"
            color="green"
            onPress={() => this.nextCard("correct")}
          />
          <Button
            title="Incorrect"
            color="red"
            onPress={() => this.nextCard("incorrect")}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center"
  },
  QA: {
    textAlign: "center",
    fontSize: 36,
    marginBottom: 70
  }
});
export default QuizScreen;
