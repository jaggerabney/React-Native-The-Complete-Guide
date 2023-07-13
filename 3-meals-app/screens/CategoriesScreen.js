import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem/CategoryItem";

function renderCategoryItem(itemData) {
  return (
    <CategoryItem title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
