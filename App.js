import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import {
  createTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import DeckListScreen from "./screens/DeckListScreen";
import NewDeckScreen from "./screens/NewDeckScreen";
import DeckScreen from "./screens/DeckScreen";
import AddCardScreen from "./screens/AddCardScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const DecksTab = createStackNavigator({
  DeckList: DeckListScreen,
  Deck: DeckScreen,
  AddCard: AddCardScreen,
  Quiz: QuizScreen,
  Results: ResultsScreen
});

const AppNavigator = createTabNavigator({
  DECKS: DecksTab,
  "NEW DECK": NewDeckScreen
});

const SwitchNavigator = createSwitchNavigator({
  WELCOME: WelcomeScreen,
  APP: AppNavigator
});

export default class App extends React.Component {
  render() {
    return <SwitchNavigator />;
  }
}
