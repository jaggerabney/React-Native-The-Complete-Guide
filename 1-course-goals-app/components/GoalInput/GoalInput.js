import { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.wrapper}>
        <TextInput
          value={enteredGoalText}
          style={styles.input}
          placeholder="Your course goal..."
          onChangeText={goalInputHandler}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    width: "100%",
  },
  actions: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
