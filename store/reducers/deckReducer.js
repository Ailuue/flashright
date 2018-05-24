import { GET_DECKS, SET_CURRENT_DECK, ADD_CARD } from '../actions/types';

const initialState = {
  decks: {},
  currentDeck: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        decks: action.payload
      };
    case SET_CURRENT_DECK: {
      return {
        ...state,
        currentDeck: action.payload
      };
    }
    case ADD_CARD: {
      return {
        decks: action.payload.newDecks,
        currentDeck: action.payload.updatedDeck
      };
    }
    default:
      return state;
  }
}
