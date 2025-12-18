import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert } from "react-native";

const AlertsScreen = () => {
  const createTwoButtonAlert = () => {
    // Implementation for creating a two-button alert
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const createThreeButtonAlert = () => {
    // Implementation for creating a three-button alert
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <ThemedView margin>
      <ThemedButton onPress={createTwoButtonAlert} className="my-5">
        Two Button Alert
      </ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert} className="my-5">
        Three Button Alert
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
