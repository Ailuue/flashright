import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

class DeckListScreen extends Component {
  state = {
    decks: [],
    updated: false
  };

  componentDidMount() {
    this.updateDeckList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.warn("worked");
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   try {
  //     if (nextProps.navigation.state.params.updated) {
  //       this.setState({ updated: true });
  //       console.warn("Changed");
  //     }
  //   } catch () {}
  // AsyncStorage.getItem("decks", (err, result) => {
  //   if (!err) {
  //     console.warn("Hello");
  //     if (JSON.stringify(prevState.decks) !== result) {
  //       this.setState({ decks: JSON.parse(result) });
  //     }
  //   }
  // });
  // }

  updateDeckList() {
    AsyncStorage.getItem("decks", (err, result) => {
      if (!err) {
        console.warn("Hello");
        this.setState({ decks: JSON.parse(result) });
      }
    });
  }

  render() {
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

    return (
      <ScrollView style={styles.container}>
        <View style={styles.deckList}>{deckList}</View>
      </ScrollView>
    );
  }
}

export default DeckListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
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
