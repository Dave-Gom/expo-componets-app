import React from "react";
import { View, ViewProps } from "react-native";

export interface ThemedCardProps extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children }: ThemedCardProps) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl shadow shadow-black/5 p-2 ${className}`}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
