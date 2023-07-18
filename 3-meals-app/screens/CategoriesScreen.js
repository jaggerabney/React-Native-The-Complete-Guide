import { FlatList } from "react-native";

import CategoryItem from "../components/CategoryItem/CategoryItem";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function itemPressHandler() {
    navigation.navigate("Meals Overview");
  }

  function renderCategoryItem({ item }) {
    return (
      <CategoryItem
        title={item.title}
        color={item.color}
        onPress={itemPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
