import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { Switch } from "react-native";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isAngry: false,
    isHappy: true,
  });
  return (
    <ThemedView margin>
      <ThemedCard>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => {
            setState({ ...state, isActive: value });
          }}
          value={state.isActive}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
