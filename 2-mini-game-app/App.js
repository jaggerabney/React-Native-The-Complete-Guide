import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import bgImage from "./assets/images/background.png";
import openSansRegular from "./assets/fonts/OpenSans-Regular.ttf";
import openSansBold from "./assets/fonts/OpenSans-Bold.ttf";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": openSansRegular,
    "open-sans-bold": openSansBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function numberConfirmHandler(number) {
    setUserNumber(number);
  }

  function gameOverHandler(numRounds) {
    setRounds(numRounds);
    setGameIsOver(true);
  }

  function newGameHandler() {
    setGameIsOver(false);
    setUserNumber(null);
    setRounds(0);
  }

  let screen = userNumber ? (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  ) : (
    <StartScreen onConfirm={numberConfirmHandler} />
  );

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.accent]}
      style={styles.background}
    >
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.background}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
