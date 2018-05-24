import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
class QuizScreen extends Component {
  state = {
    current: null,
    answer: false,
    score: 0
  };

  componentWillMount() {
    this.setState({
      current: this.props.deck.cards[0]
    });
  }

  nextCard = score => {
    const index = this.props.deck.cards.findIndex(
      value => value === this.state.current
    );
    if (index === this.props.deck.cards.length - 1) {
      this.props.navigation.navigate('Results', {
        score: score === 'correct' ? this.state.score + 1 : this.state.score
      });
      this.setState({ score: 0 });
    } else {
      this.setState(prevState => {
        return {
          current: this.props.deck.cards[index + 1],
          answer: false,
          score: score === 'correct' ? prevState.score + 1 : prevState.score
        };
      });
    }
  };

  render() {
    const { answer, current } = this.state;
    const { deck } = this.props;
    if (!answer) {
      return (
        <View style={styles.container}>
          <Text style={styles.QA}>{current.question}</Text>
          <Button
            title="show answer"
            onPress={() => this.setState({ answer: true })}
          >
            Show Answer
          </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.QA}>{current.answer}</Text>
          <Button
            title="Correct"
            color="green"
            onPress={() => this.nextCard('correct')}
          />
          <Button
            title="Incorrect"
            color="red"
            onPress={() => this.nextCard('incorrect')}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  QA: {
    textAlign: 'center',
    fontSize: 36,
    marginBottom: 70
  }
});

const mapStateToProps = state => ({
  deck: state.decks.currentDeck
});

export default connect(mapStateToProps)(QuizScreen);
