import React from "react";
import { Pressable, Switch, SwitchProps } from "react-native";
import ThemedText from "./ThemedText";

interface ThemedSwitchProps extends SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  text?: string;
  className?: string;
}

const ThemedSwitch = ({
  onValueChange,
  value,
  text,
  className,
}: ThemedSwitchProps) => {
  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}
      <Switch
        onValueChange={onValueChange}
        value={value}
        className={`${className}`}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
