import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface ThemedTextInputProps extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...props }: ThemedTextInputProps) => {
  return (
    <TextInput
      className={`py-3 px-2  text-black dark:text-white ${className}`}
      {...props}
    />
  );
};

export default ThemedTextInput;
