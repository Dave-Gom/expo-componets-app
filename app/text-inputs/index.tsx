import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemedCard>

          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Correo electrónico"
              value={form.email}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Teléfono"
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
