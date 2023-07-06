import { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";
import InstructionText from "../components/UI/InstructionText/InstructionText";
import Title from "../components/UI/Title/Title";
import Card from "../components/UI/Card/Card";

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

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.actions}>
          <View style={styles.action}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.action}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  instructionText: {
    marginBottom: 12,
  },
});

export default GameScreen;
