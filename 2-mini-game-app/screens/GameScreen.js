import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/UI/Title/Title";
import NumberContainer from "../components/game/NumberContainer/NumberContainer";

function generateRandomNumberBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
