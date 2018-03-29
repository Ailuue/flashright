import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
