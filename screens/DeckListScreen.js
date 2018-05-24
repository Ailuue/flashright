import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

import { getDecks, setCurrentDeck } from '../store/actions/deckActions';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

class DeckListScreen extends Component {
  state = {
    decks: [],
    updated: false
  };

  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props.decks;
    let deckList;

    if (decks && Object.keys(decks).length > 0) {
      deckList = decks.map(deck => {
        return (
          <TouchableOpacity
            style={styles.deck}
            key={deck.title}
            onPress={() => {
              this.props.setCurrentDeck(deck);
              this.props.navigation.navigate('Deck');
            }}
          >
            <Text style={styles.deckName}>{deck.title}</Text>
            <Text style={styles.deckCardCount}>{deck.cardNum} cards</Text>
          </TouchableOpacity>
        );
      });
    } else {
      deckList = <Text />;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.deckList}>{deckList}</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: "center",
    // justifyContent: "center"
  },
  deckList: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: 'center'
  },
  deck: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  deckName: {
    textAlign: 'center',
    fontSize: 24
  },
  deckCardCount: {
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, { getDecks, setCurrentDeck })(
  DeckListScreen
);
