import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonWrapperOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonWrapperInner, styles.pressed]
            : styles.buttonWrapperInner
        }
        onPress={onPress}
        android_ripple={{
          color: Colors.primaryRipple,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapperOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonWrapperInner: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
