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
    AsyncStorage.setItem("decks", JSON.stringify(newDeckList));
  });
}

export function addCard(deck, question, answer) {
  const newCard = {
    question: question,
    answer: answer
  };
  AsyncStorage.getItem("decks", (err, result) => {
    const deckList = JSON.parse(result);
    const newDeck = deckList.map(item => {
      if (item.title === deck.title) {
        item.cards.push(newCard);
      }
    });
    AsyncStorage.setItem("decks", JSON.stringify(newDeck));
  });
}

export function getDeckList() {
  return AsyncStorage.getItem("decks");
}
