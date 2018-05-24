import { AsyncStorage } from 'react-native';

export function setDefaultDecks(decks) {
  AsyncStorage.setItem('decks', JSON.stringify(decks));
}
