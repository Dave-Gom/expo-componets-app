import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const ModalWindow = () => {
  return (
    <ThemedView className="justify-center items-center flex-1">
      <ThemedText>Hola soy un modal</ThemedText>

      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </ThemedView>
  );
};

export default ModalWindow;
