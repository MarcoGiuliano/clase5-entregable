import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ButtonCustom from "./Button";
import { colors } from "../Styles/Colors";

const Header = ({ handleAdd }) => {
  const [input, setInput] = useState("");

  const handleAddAux = () => {
    if (input !== "") {
      handleAdd(input);
      setInput("");
    }
  };

  return (
    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={setInput}
        value={input}
      />
      <ButtonCustom onPress={() => handleAddAux()} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flex: 0.2,
  },
  input: {
    outline: "none",
    borderRadius: 8,
    borderWidth: 2,
    width: 250,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 40,
    borderColor: "black",
  },
});
