import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
