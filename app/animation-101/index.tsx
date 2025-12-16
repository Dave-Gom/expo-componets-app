import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ThemedView margin className="flex-1 justify-center items-center">
      <Animated.View
        className="bg-light-secondary bg-dark-secondary rounded-xl"
        style={{
          height: 150,
          width: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      <ThemedButton className="my-5" onPress={fadeIn}>
        Fade in
      </ThemedButton>
      <ThemedButton className="my-5" onPress={fadeOut}>
        Fade out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
