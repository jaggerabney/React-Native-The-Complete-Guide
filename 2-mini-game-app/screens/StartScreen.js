import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Alert,
  View,
  useWindowDimensions,
} from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";
import InstructionText from "../components/UI/InstructionText/InstructionText";
import Title from "../components/UI/Title/Title";
import Card from "../components/UI/Card/Card";
import Colors from "../constants/colors";

function StartScreen({ onConfirm }) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(text) {
    setUserInput(text);
  }

  function confirmButtonHandler() {
    const chosenNumber = parseInt(userInput);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "The entered number must be between 1 and 99.",
        [{ text: "Okay", style: "default", onPress: resetInputHandler }]
      );

      return;
    }

    onConfirm(chosenNumber);
  }

  function resetInputHandler() {
    setUserInput("");
  }

  const marginTopDistance = windowHeight < 380 ? 30 : 100;

  return (
    <View style={[styles.rootWrapper, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number:</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputChangeHandler}
          value={userInput}
        />
        <View style={styles.actions}>
          <View style={styles.action}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.action}>
            <PrimaryButton onPress={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootWrapper: {
    flex: 1,
    alignItems: "center",
  },
  inputWrapper: {
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primaryDark,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
  },
  action: {
    flex: 1,
  },
});

export default StartScreen;
