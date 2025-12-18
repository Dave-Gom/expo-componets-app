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
          className="mb-4"
          value={state.isActive}
        />
        <ThemedSwitch
          text="Enojado"
          onValueChange={(value) => {
            setState({ ...state, isAngry: value });
          }}
          className="mb-4"
          value={state.isAngry}
        />
        <ThemedSwitch
          text="Feliz"
          onValueChange={(value) => {
            setState({ ...state, isHappy: value });
          }}
          value={state.isHappy}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
