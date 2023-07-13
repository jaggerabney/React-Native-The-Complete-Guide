import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";

function CategoryItem({ title, color }) {
  return (
    <View style={styles.wrapperOuter}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
        <View style={[styles.wrapperInner, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperOuter: {
    flex: 1,
    margin: 12,
    height: Dimensions.get("window").height / 6,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  wrapperInner: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryItem;
