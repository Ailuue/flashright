import React, { Component } from "react";
import { View, Text } from "react-native";
class DeskScreen extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.cardNum}</Text>
        <Text>DeskScreen</Text>
        <Text>DeskScreen</Text>
      </View>
    );
  }
}

export default DeskScreen;
