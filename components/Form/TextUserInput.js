import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextUserInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        style={[styles.input, { paddingBottom: props.paddingBottom }]}
        placeholder={props.placeholder}
        placeholderTextColor="#6d7a78"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#dedede",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default TextUserInput;
