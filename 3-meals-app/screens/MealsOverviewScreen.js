import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  return (
    <View styles={styles.container}>
      <Text>Meals Overview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
