import { View, Text, Image, StyleSheet } from "react-native";

import Title from "../components/UI/Title/Title";
import Colors from "../constants/colors";
import bgImage from "../assets/images/success.png";

function GameOverScreen() {
  return (
    <View style={styles.rootWrapper}>
      <Title>Game over!</Title>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={bgImage} />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootWrapper: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primaryDark,
    overflow: "hidden",
    margin: 36,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
