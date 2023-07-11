import { View, Text, Image, StyleSheet } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";
import Title from "../components/UI/Title/Title";
import Colors from "../constants/colors";
import bgImage from "../assets/images/success.png";

function GameOverScreen({ rounds, userNumber, onNewGame }) {
  return (
    <View style={styles.rootWrapper}>
      <Title>Game over!</Title>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={bgImage} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
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
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
});

export default GameOverScreen;
