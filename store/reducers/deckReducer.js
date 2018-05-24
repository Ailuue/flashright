import { GET_DECKS } from '../actions/types';

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
    default:
      return state;
  }
}
