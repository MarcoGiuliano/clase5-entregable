import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Item } from "./Item";
import { colors } from "../Styles/Colors";

const Lista = ({ handleModal, todoList }) => {
  return (
    <View style={styles.itemList}>
      {/* <Item item={{ id: 1, todo: "Estudiar React Native" }}></Item>
    <Item item={{ id: 2, todo: "Cerrar el mic" }}></Item>
    <Item item={{ id: 3, todo: "Usar Youtube" }}></Item>
    <Item item={{ id: 4, todo: "Usar Figma" }}></Item>
    <Item item={{ id: 5, todo: "Ver tutorial del indu" }}></Item> */}
      {todoList.length !== 0 ? (
        <FlatList
          data={todoList}
          keyExtractor={(todo) => todo.id}
          renderItem={({ item }) => (
            <Item onPress={handleModal} item={item}></Item>
          )}
        />
      ) : (
        <Text>No hay todos cargados</Text>
      )}
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: colors.secondary,
    width: "95%",
    padding: 20,
    flex: 0.8,
    borderRadius: 8,
  },
});
