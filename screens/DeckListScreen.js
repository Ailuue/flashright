import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const decks = [
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

class DeckListScreen extends Component {
  state = {
    decks: decks
  };

  deckList = this.state.decks.map(deck => {
    return (
      <TouchableOpacity
        style={styles.deck}
        key={deck.title}
        onPress={() => this.props.navigation.navigate("Deck", { deck })}
      >
        <Text style={styles.deckName}>{deck.title}</Text>
        <Text style={styles.deckCardCount}>{deck.cardNum} cards</Text>
      </TouchableOpacity>
    );
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deckList}>{this.deckList}</View>
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
  },
  deckList: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: "center"
  },
  deck: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "black"
  },
  deckName: {
    textAlign: "center",
    fontSize: 24
  },
  deckCardCount: {
    textAlign: "center"
  }
});
