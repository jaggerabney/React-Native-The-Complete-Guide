import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import bgImage from "./assets/images/background.png";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function numberConfirmHandler(number) {
    setUserNumber(number);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = userNumber ? (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  ) : (
    <StartScreen onConfirm={numberConfirmHandler} />
  );

  if (gameIsOver) {
    return <GameOverScreen />;
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
