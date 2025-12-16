import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

export interface ThemedButtonProps extends PressableProps {
  textClassName?: string;
  children: string;
}

const ThemedButton = ({
  className,
  textClassName,
  children,
  ...props
}: ThemedButtonProps) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...props}
    >
      <Text className={`text-white text-2xl ${textClassName}`}>{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
