import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addGoalHandler() {
    if (enteredGoalText.length < 1) {
      return;
    }

    props.onAdd(enteredGoalText);

    setEnteredGoalText("");
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={enteredGoalText}
        style={styles.input}
        placeholder="Your course goal..."
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flexGrow: 1,
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
