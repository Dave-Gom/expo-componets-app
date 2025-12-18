import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, Switch, SwitchProps, View } from "react-native";
import ThemedText from "./ThemedText";

interface ThemedSwitchProps extends SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  text?: string;
  className?: string;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({
  onValueChange,
  value,
  text,
  className,
}: ThemedSwitchProps) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row items-center justify-between mb-2 active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        onValueChange={onValueChange}
        value={value}
        className={`${className}`}
        thumbColor={isAndroid ? switchActiveColor : ""}
        ios_backgroundColor={value ? "green" : "red"}
        trackColor={{
          false: "red",
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
