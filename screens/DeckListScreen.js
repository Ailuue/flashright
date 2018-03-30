import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const decks = [
  {
    0: {
      name: "React",
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
    }
  },
  {
    1: {
      name: "React Native",
      cardNum: 1,
      cards: [
        {
          question: "How do you make a 'div' in React Native?",
          answer: "<View></View>"
        }
      ]
    }
  },
  {
    2: {
      name: "My New Deck",
      cardNum: 0,
      cards: null
    }
  }
];

class DeckListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeckListScreen</Text>
        <Text>DeckListScreen</Text>
        <Text>DeckListScreen</Text>
        <Text>DeckListScreen</Text>
        <Button
          title="to deck"
          onPress={() => this.props.navigation.navigate("Deck")}
        >
          Go to Deck
        </Button>
      </View>
    );
  }
}

export default DeckListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
