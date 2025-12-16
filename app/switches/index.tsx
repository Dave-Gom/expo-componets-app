import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isAngry: false,
    isHappy: true,
  });
  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedSwitch
          text="Activo"
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
