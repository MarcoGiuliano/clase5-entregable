import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Item } from "../Components/Item";
import { colors } from "../Styles/Colors";
import ButtonCustom from "../Components/Button";
import Header from "../Components/Header";
import Lista from "../Components/Lista";
import CustomModal from "../Components/Modal";

export default function Layout() {
  const [todoList, settodoList] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [idSelected, setidSelected] = useState("");

  const handleAdd = (input) => {
    settodoList([...todoList, { id: Date.now(), todo: input }]);
  };

  const handleModal = (id) => {
    setmodalVisible(true);
    setidSelected(id);
  };

  const handleDelete = () => {
    const todosFiltrados = todoList.filter((item) => item.id !== idSelected);
    settodoList(todosFiltrados);
    setmodalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header handleAdd={handleAdd} />
      <Lista handleModal={handleModal} todoList={todoList} />
      <CustomModal
        modalVisible={modalVisible}
        setmodalVisible={setmodalVisible}
        handleDelete={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#cbc0d3",
  },
});
