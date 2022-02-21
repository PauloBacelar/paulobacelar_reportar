import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadioInput = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.setSelect(props.id)}
    >
      <View style={styles.radio}>
        {props.selected ? <View style={styles.radioInside} /> : null}
      </View>

      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
    alignItems: "flex-start",
  },

  radio: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  radioInside: {
    height: 9.5,
    width: 9.5,
    borderRadius: 0,
    backgroundColor: "#006557",
    borderRadius: 1.6,
  },

  text: {
    fontSize: 16,
    fontFamily: "ubuntu",
    color: "#424f4d",
  },
});
