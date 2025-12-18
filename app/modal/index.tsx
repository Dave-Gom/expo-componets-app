import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link href="/modal/ModalWindow">
        <ThemedText className="text-light-text dark:text-dark-text my-2">
          Open Modal
        </ThemedText>
      </Link>

      <ThemedButton
        onPress={() => {
          router.push("/modal/ModalWindow");
        }}
        className="mx-4"
      >
        Abrir Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
