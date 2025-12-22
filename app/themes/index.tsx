import { useThemeChangerContext } from "@/presentation/contex/ThemeChangerContext";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const ThemesScreen = () => {
  const { currentTheme, toggleTheme, isSystemTheme, setSystemTheme } =
    useThemeChangerContext();
  const [darkModeSetting, setDarkModeSetting] = useState({
    darkMode: currentTheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();
    setDarkModeSetting({
      darkMode: value,
      systemMode: isSystemTheme,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }
    setDarkModeSetting({
      darkMode: darkModeSetting.darkMode,
      systemMode: value,
    });
  };
  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSetting.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          value={darkModeSetting.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
