import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedText from "@/presentation/shared/ThemedText";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "primary"
  );

  const onRefresh = () => {
    setIsRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <ScrollView>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ScrollView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
