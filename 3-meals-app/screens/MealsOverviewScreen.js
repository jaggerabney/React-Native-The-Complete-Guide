import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View styles={styles.container}>
      <Text style={styles.text}>{`Meals Overview - ${categoryId}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 16,
  },
});

export default MealsOverviewScreen;
