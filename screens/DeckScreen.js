import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

class DeckScreen extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.labels}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardNumber}>{deck.cardNum} cards</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Add Card"
            color="blue"
            onPress={() => this.props.navigation.navigate('AddCard')}
          />
          {deck.cards.length > 0 && (
            <Button
              title="Start Quiz"
              color="green"
              onPress={() => this.props.navigation.navigate('Quiz')}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  labels: {
    flex: 1,
    marginTop: 100
  },
  title: {
    textAlign: 'center',
    fontSize: 36
  },
  cardNumber: {
    textAlign: 'center',
    fontSize: 24,
    color: 'grey'
  },
  buttons: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  deck: state.decks.currentDeck
});

export default connect(mapStateToProps)(DeckScreen);
