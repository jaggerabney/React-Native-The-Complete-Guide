import { StyleSheet, View, FlatList } from "react-native";

import MealItem from "../components/MealItem/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem({ item }) {
    return <MealItem title={item.title} />;
  }

  return (
    <View styles={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(meal) => meal.id}
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

export default MealsOverviewScreen;
