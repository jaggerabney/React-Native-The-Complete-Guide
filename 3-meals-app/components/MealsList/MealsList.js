import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../MealItem/MealItem";

function MealsList({ meals, navigation }) {
  function renderMealItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealDetails", { mealId: item.id });
    }

    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View styles={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export default MealsList;
