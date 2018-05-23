import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { setDefaultDecks } from "../utils/api";
import { defaultDecks } from "../utils/defaultDecks";

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
          onPress={() => this.props.navigation.navigate("App")}
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
