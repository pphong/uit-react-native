import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type InputProps = {
  inputAccessoryViewID: string;
  placeHolder: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  value?: string;
  customStyle?: object;
};
const Input: React.FC<InputProps> = ({
  inputAccessoryViewID,
  placeHolder,
  secureTextEntry,
  value,
  customStyle,
}) => {
  const [text, setText] = useState(value);
  return (
    <TextInput
      style={[styles.textInput, customStyle]}
      inputAccessoryViewID={inputAccessoryViewID}
      onChangeText={setText}
      value={text}
      placeholder={placeHolder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 3,
    minHeight: 5,
    minWidth: 5,
    borderRadius: "6px",
    borderWidth: 2,
    borderColor: "gray",
    color: 'white'
  },
});

export default Input;
