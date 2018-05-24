import { GET_DECKS, SET_CURRENT_DECK } from '../actions/types';

const initialState = {
  decks: {},
  currentDeck: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        decks: action.payload,
        currentDeck: {}
      };
    case SET_CURRENT_DECK: {
      return {
        ...state,
        currentDeck: action.payload
      };
    }
    default:
      return state;
  }
}
