import { SET_DECKS, ADD_DECK } from './types';
import { AsyncStorage } from 'react-native';

export const setDecks = () => dispatch => {
  AsyncStorage.getItem('decks', (err, result) => {
    if (!err) {
      dispatch({ type: SET_DECKS, payload: JSON.parse(result) });
    } else {
      dispatch({ type: SET_DECKS, payload: {} });
    }
  });
};
