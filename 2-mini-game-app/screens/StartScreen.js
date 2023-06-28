import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

function StartScreen() {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" />
      <View style={styles.actions}>
        <View style={styles.action}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.action}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
