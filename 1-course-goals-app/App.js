import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      {
        text: goalText,
        id: `${goalText} ${Math.random().toString()}`,
      },
    ]);
  }

  return (
    <View style={styles.app}>
      <GoalInput onAdd={addGoalHandler} />
      <View style={styles.goalsWrapper}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsWrapper: {
    flex: 5,
  },
});
