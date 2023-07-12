import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";
import Title from "../components/UI/Title/Title";
import Colors from "../constants/colors";
import bgImage from "../assets/images/success.png";

function GameOverScreen({ rounds, userNumber, onNewGame }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  let imageSize = 300;

  if (windowWidth < 380) {
    imageSize = 150;
  }

  if (windowHeight < 500) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootWrapper}>
        <Title>Game over!</Title>
        <View style={[styles.imageWrapper, imageStyle]}>
          <Image style={styles.image} source={bgImage} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootWrapper: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
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
