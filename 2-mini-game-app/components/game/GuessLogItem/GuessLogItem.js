import { View, Text, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";

function GuessLogItem({ roundNum, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNum}</Text>
      <Text>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryDark,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default GuessLogItem;
