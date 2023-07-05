import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import bgImage from "./assets/images/background.png";

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
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.background}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
