import { GET_DECKS, ADD_DECK } from './types';
import { AsyncStorage } from 'react-native';

export const getDecks = () => dispatch => {
  AsyncStorage.getItem('decks', (err, result) => {
    if (!err) {
      console.warn('hi');
      dispatch({ type: GET_DECKS, payload: JSON.parse(result) });
    } else {
      console.warn('no');
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
