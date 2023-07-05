import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/UI/Title/Title";
import NumberContainer from "../components/game/NumberContainer/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";

function generateRandomNumberBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randNum;
  }
}

let min = 1,
  max = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumberBetween(min, max, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }

    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }

    console.log(min, max);
    const newNum = generateRandomNumberBetween(min, max, currentGuess);

    setCurrentGuess(newNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.actions}>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "lower")}
            style={styles.action}
          >
            -
          </PrimaryButton>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "higher")}
            style={styles.action}
          >
            +
          </PrimaryButton>
        </View>
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
  actions: {
    flexDirection: "row",
  },
  action: {
    flex: 1,
  },
});

export default GameScreen;
