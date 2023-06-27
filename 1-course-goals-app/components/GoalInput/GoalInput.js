import { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const goalImage = require("../../assets/images/goal.png");

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
    <View style={styles.background}>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.wrapper}>
          <Image source={goalImage} style={styles.image} />
          <TextInput
            value={enteredGoalText}
            style={styles.input}
            placeholder="Your course goal..."
            onChangeText={goalInputHandler}
          />
          <View style={styles.actions}>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
            </View>
            <View style={styles.button}>
              <Button
                title="Add goal"
                onPress={addGoalHandler}
                color="#b180f0"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1e085a",
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 8,
    width: "100%",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
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
