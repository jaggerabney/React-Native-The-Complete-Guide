import { Text, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
    fontSize: 24,
  },
});

export default InstructionText;
