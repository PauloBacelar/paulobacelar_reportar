import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioInput from "./RadioInput";
import TextUserInput from "./TextUserInput";

const Form = () => {
  return (
    <View>
      <View style={styles.content}>
        <RadioInput selected={true} label="O profissional não compareceu." />
        <RadioInput
          selected={true}
          label="O profissional não prestou um bom serviço."
        />
        <RadioInput selected={true} label="Outro." />

        <TextUserInput paddingBottom="1rem" placeholder="Título" />
        <TextUserInput
          paddingBottom="7rem"
          placeholder="Especifique aqui o que houve."
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: "1.5rem",
  },
});

export default Form;
