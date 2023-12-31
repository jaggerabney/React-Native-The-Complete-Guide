import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import { CATEGORIES } from "../../data/dummy-data";

function CategoryItem({ title, color, onPress }) {
  const headerHeight = useHeaderHeight();
  const marginLength = 12;
  const itemHeight =
    (Dimensions.get("window").height - headerHeight) / (CATEGORIES.length / 2) -
    marginLength * 2;

  return (
    <View
      style={[
        styles.wrapperOuter,
        { height: itemHeight, margin: marginLength },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        onPress={onPress}
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
    borderRadius: 8,
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
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    flex: 1,
    margin: 0,
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
