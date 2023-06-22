import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder="Your course goal..." />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 50,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flexGrow: 1,
    marginRight: 8,
    padding: 8,
  },
});
