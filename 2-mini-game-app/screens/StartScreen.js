import { useState } from "react";
import { StyleSheet, TextInput, Alert, View } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";
import Colors from "../constants/colors";

function StartScreen({ onConfirm }) {
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

  return (
    <View style={styles.inputWrapper}>
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
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: "center",
    marginTop: 100,
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
