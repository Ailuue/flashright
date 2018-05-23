import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { StyleSheet, Text, View } from "react-native";
import {
  createTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import rootReducer from './store/reducers';
import DeckListScreen from './screens/DeckListScreen';
import NewDeckScreen from './screens/NewDeckScreen';
import DeckScreen from './screens/DeckScreen';
import AddCardScreen from './screens/AddCardScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const middleware = [thunk];
const state = {};
const store = createStore(
  rootReducer,
  state,
  compose(applyMiddleware(...middleware))
);

const DecksTab = createStackNavigator({
  DeckList: DeckListScreen,
  Deck: DeckScreen,
  AddCard: AddCardScreen,
  Quiz: QuizScreen,
  Results: ResultsScreen
});

const AppNavigator = createTabNavigator({
  Decks: DecksTab,
  NewDeck: NewDeckScreen
});

const SwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  App: AppNavigator
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}
