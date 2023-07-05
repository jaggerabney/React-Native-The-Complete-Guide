import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import bgImage from "./assets/images/background.png";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function numberConfirmHandler(number) {
    setUserNumber(number);
  }

  let screen = userNumber ? (
    <GameScreen />
  ) : (
    <StartScreen onConfirm={numberConfirmHandler} />
  );

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
