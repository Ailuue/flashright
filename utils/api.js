import { AsyncStorage } from "react-native";

export function setDefaultDecks(decks) {
  AsyncStorage.setItem("decks", JSON.stringify(decks));
}

export function addDeck(deckName) {
  const newDeck = {
    title: deckName,
    cardNum: 0,
    cards: null
  };
  AsyncStorage.getItem("decks", (err, result) => {
    const newDeckList = JSON.parse(result);
    newDeckList.push(newDeck);
    AsyncStorage.setItem("decks", JSON.stringify(newDeckList), () =>
      AsyncStorage.getItem("decks", (err, result) => console.warn(result))
    );
  });
}

export function getDeckList() {
  return AsyncStorage.getItem("decks");
}
