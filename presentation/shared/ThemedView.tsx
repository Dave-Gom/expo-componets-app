import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ThemedViewProps extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: bgColor || backgroundColor,
          paddingTop: safe ? safeArea.top : 0,
          paddingBottom: safe ? safeArea.bottom : 0,
          margin: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
