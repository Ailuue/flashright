import { GET_DECKS, ADD_DECK, SET_CURRENT_DECK, ADD_CARD } from './types';
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
    cards: []
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

export const addCard = (deck, question, answer) => dispatch => {
  const newCard = {
    question: question,
    answer: answer
  };
  AsyncStorage.getItem('decks', (err, result) => {
    const deckList = JSON.parse(result);
    let updatedDeck;
    const newDecks = deckList.map(item => {
      if (item.title === deck.title) {
        item.cards.push(newCard);
        item.cardNum++;
        updatedDeck = item;
        return item;
      }
      return item;
    });
    AsyncStorage.setItem('decks', JSON.stringify(newDecks)).then(x =>
      dispatch({ type: ADD_CARD, payload: { updatedDeck, newDecks } })
    );
  });
};
