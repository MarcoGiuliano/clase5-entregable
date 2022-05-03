import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/Colors";
import { TouchableOpacity } from "react-native-web";

export const Item = ({ item, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <Text style={styles.text}>{item.todo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.secondary3,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
