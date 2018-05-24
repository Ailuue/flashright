import { GET_DECKS, ADD_DECK, SET_CURRENT_DECK } from './types';
import { AsyncStorage } from 'react-native';

export const getDecks = () => dispatch => {
  AsyncStorage.getItem('decks', (err, result) => {
    if (!err) {
      dispatch({ type: GET_DECKS, payload: JSON.parse(result) });
    } else {
      dispatch({ type: GET_DECKS, payload: {} });
    }
  });
};

export const addDeck = name => dispatch => {
  const newDeck = {
    title: name,
    cardNum: 0,
    cards: null
  };
  AsyncStorage.getItem('decks', (err, result) => {
    const newDeckList = JSON.parse(result);
    newDeckList.push(newDeck);
    AsyncStorage.setItem('decks', JSON.stringify(newDeckList)).then(x =>
      dispatch(getDecks())
    );
  });
  getDecks();
};

export const setCurrentDeck = deck => {
  return {
    type: SET_CURRENT_DECK,
    payload: deck
  };
};
