import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Styles/Colors";

const ButtonCustom = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add todo</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    color: colors.gray,
  },
});
