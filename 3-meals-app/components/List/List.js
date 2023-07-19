import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((item) => (
    <View style={styles.item}>
      <Text style={styles.text} key={item}>
        {item}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
