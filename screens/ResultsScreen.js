import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
class ResultsScreen extends Component {
  static navigationOptions = {
    headerLeft: null
  };

  handleReturn = () => {
    this.props.navigation.navigate('Deck');
  };

  render() {
    const { deck } = this.props;
    const { score } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.results}>
          Your Results: {Math.floor(score / deck.cards.length * 100)}%
        </Text>
        <Text style={styles.correct}>
          You got {score} out of {deck.cards.length} correct.
        </Text>
        <Button title="Return to Deck" onPress={() => this.handleReturn()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  results: {
    textAlign: 'center',
    fontSize: 36
  },
  correct: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 50
  }
});

const mapStateToProps = state => ({
  deck: state.decks.currentDeck
});

export default connect(mapStateToProps)(ResultsScreen);
