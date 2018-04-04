import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { setDefaultDecks } from "../utils/api";

const defaultDecks = [
  {
    title: "React",
    cardNum: 3,
    cards: [
      {
        question: "Where should you make API calls?",
        answer: "componentDidMount"
      },
      {
        question: "What is a HOC?",
        answer:
          "A High Order Component wraps another component to pass through it."
      },
      {
        question: "How do you get better at React?",
        answer: "Practice!"
      }
    ]
  },
  {
    title: "React Native",
    cardNum: 1,
    cards: [
      {
        question: "How do you make a 'div' in React Native?",
        answer: "<View></View>"
      }
    ]
  },
  {
    title: "My New Deck",
    cardNum: 0,
    cards: null
  }
];

class WelcomeScreen extends Component {
  componentDidMount() {
    setDefaultDecks(defaultDecks);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to <Text style={styles.flashright}>Flashright</Text>
        </Text>
        <Button
          title="Get Started"
          onPress={() => this.props.navigation.navigate("APP")}
        />
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
  welcome: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 100
  },
  flashright: {
    color: "blue"
  }
});
export default WelcomeScreen;
