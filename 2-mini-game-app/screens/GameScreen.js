import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GuessLogItem from "../components/game/GuessLogItem/GuessLogItem";
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
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [roundsArray, setRoundsArray] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      min = 1;
      max = 100;

      onGameOver(roundsArray.length);
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

    const newNum = generateRandomNumberBetween(min, max, currentGuess);

    setCurrentGuess(newNum);
    setRoundsArray((prevRoundsArray) => [currentGuess, ...prevRoundsArray]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Is your number higher or lower?
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
    </>
  );

  if (windowWidth > 500) {
    content = (
      <>
        <View style={styles.actionsWide}>
          <View style={styles.action}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.action}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listWrapper}>
        <FlatList
          data={roundsArray}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNum={roundsArray.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
  },
  actionsWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
    fontSize: 20,
  },
  listWrapper: {
    flex: 1,
    padding: 4,
  },
});

export default GameScreen;
