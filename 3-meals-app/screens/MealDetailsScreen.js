import { useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Button,
  ToastAndroid,
} from "react-native";

import MealDetails from "../components/MealDetails/MealDetails";
import Subtitle from "../components/Subtitle/Subtitle";
import List from "../components/List/List";
import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    ToastAndroid.show("Pressed!", ToastAndroid.SHORT);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Tap me!" onPress={headerButtonPressHandler} />
      ),
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listWrapper}>
        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Recipe</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listWrapper: {
    maxWidth: "80%",
  },
});

export default MealDetailsScreen;
