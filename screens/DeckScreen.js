import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

class DeskScreen extends Component {
  state = {
    deck: null
  };

  componentWillMount() {
    this.setState({ deck: this.props.navigation.state.params.deck });
  }
  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.labels}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardNumber}>{deck.cardNum} cards</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title="add card"
            color="blue"
            onPress={() => this.props.navigation.navigate("AddCard")}
          >
            Add Card
          </Button>
          <Button
            title="start quiz"
            color="green"
            onPress={() => this.props.navigation.navigate("Quiz")}
          >
            Start Quiz
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center"
  },
  labels: {
    flex: 1,
    marginTop: 100
  },
  title: {
    textAlign: "center",
    fontSize: 36
  },
  cardNumber: {
    textAlign: "center",
    fontSize: 24,
    color: "grey"
  },
  buttons: {
    flex: 1
  }
});

export default DeskScreen;
