import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function toggleModalVisibilityHandler() {
    setModalIsVisible((prevVisibility) => !prevVisibility);
  }

  function addGoalHandler(goalText) {
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      {
        text: goalText,
        id: `${goalText} ${Math.random().toString()}`,
      },
    ]);

    toggleModalVisibilityHandler();
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((prevCourseGoals) =>
      prevCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <View style={styles.app}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={toggleModalVisibilityHandler}
      />
      <GoalInput
        onAdd={addGoalHandler}
        onCancel={toggleModalVisibilityHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsWrapper}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDelete={deleteGoalHandler}
            />
          )}
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
