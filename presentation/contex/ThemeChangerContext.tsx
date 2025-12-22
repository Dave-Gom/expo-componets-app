import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

export const useThemeChangerContext = () => {
  const themeCharnger = useContext(ThemeChangerContext);
  return themeCharnger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setisDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme ?? "light"
    : isDarkMode
    ? "dark"
    : "light";

  useEffect(() => {
    AsyncStorage.getItem("themePreference").then((value) => {
      if (!value) return;

      setisDarkMode(value === "dark");
      setIsSystemThemeEnabled(value === "system");
      setColorScheme(value as "light" | "dark" | "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme,
          isSystemTheme: isSystemThemeEnabled,
          toggleTheme: async () => {
            setColorScheme(isDarkMode ? "light" : "dark");
            setisDarkMode(!isDarkMode);
            setIsSystemThemeEnabled(false);
            await AsyncStorage.setItem(
              "themePreference",
              isDarkMode ? "light" : "dark"
            );
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(!isSystemThemeEnabled);
            await AsyncStorage.setItem("themePreference", "system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
