import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

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
      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({});
        }}
      >
        Fade in
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        Fade out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
