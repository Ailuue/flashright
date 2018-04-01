import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";
import { addDeck } from "../utils/api";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
class NewDeckScreen extends Component {
  state = {
    deckName: ""
  };

  handleTextChange = text => {
    this.setState({ deckName: text });
  };

  onSubmit = () => {
    addDeck(this.state.deckName);
    this.props.navigation.navigate("DECKS");
  };
  render() {
    const { deckName } = this.state;
    return (
      <View style={styles.container}>
        <Text>Create a New Deck</Text>
        <Text>What is your deck called?</Text>
        <TextInput
          style={styles.input}
          placeholder="New Deck Name"
          value={deckName}
          onChangeText={text => this.handleTextChange(text)}
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
export default NewDeckScreen;
