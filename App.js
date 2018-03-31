import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { createTabNavigator, createStackNavigator } from "react-navigation";
import DeckListScreen from "./screens/DeckListScreen";
import NewDeckScreen from "./screens/NewDeckScreen";
import DeckScreen from "./screens/DeckScreen";
import AddCardScreen from "./screens/AddCardScreen";
import QuizScreen from "./screens/QuizScreen";

const DecksTab = createStackNavigator({
  DeckList: DeckListScreen,
  Deck: DeckScreen,
  AddCard: AddCardScreen,
  Quiz: QuizScreen
});

const AppNavigator = createTabNavigator({
  DECKS: DecksTab,
  "NEW DECK": NewDeckScreen
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
