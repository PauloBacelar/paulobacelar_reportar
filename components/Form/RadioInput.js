import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadioInput = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radio}
        onPress={() => props.setSelect(props.id)}
      >
        {props.selected ? <View style={styles.radioInside} /> : null}
      </TouchableOpacity>

      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: "1.5rem",
  },

  radio: {
    height: "1rem",
    width: "1rem",
    borderRadius: "0.25rem",
    borderWidth: 2,
    borderColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.5rem",
  },

  radioInside: {
    height: "0.6rem",
    width: "0.6rem",
    borderRadius: 0,
    backgroundColor: "#a3a3a3",
    borderRadius: "0.1rem",
  },

  text: {
    fontSize: "1rem",
    fontFamily: "ubuntu",
    color: "#424f4d",
  },
});
