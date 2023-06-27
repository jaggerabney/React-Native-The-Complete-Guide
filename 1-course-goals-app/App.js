import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState();

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.app}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Your course goal..."
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsWrapper}>
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsWrapper: {
    flex: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flexGrow: 1,
    marginRight: 8,
    padding: 8,
  },
});
