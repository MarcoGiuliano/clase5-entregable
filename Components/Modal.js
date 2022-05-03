import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Styles/Colors";

const CustomModal = ({ modalVisible, setmodalVisible, handleDelete }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setmodalVisible(!modalVisible);
      }}
    >
      <View style={styles.containerModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setmodalVisible(false)}>
            <Text>Cerrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.containerEliminar}>Eliminar todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    height: 200,
    width: 300,
    backgroundColor: colors.secondary3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  containerEliminar: {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    padding: 8,
    textAlign: "center",
    fontSize: 30,
    marginTop: 10,
    borderRadius: 10,
  },
});
