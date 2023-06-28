import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonWrapperOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonWrapperInner, styles.pressed]
            : styles.buttonWrapperInner
        }
        onPress={pressHandler}
        android_ripple={{
          color: "#640233",
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
    backgroundColor: "#72063c",
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
