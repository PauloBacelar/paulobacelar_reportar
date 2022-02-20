import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
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
          style={{ marginBottom: "2rem" }}
        />

        <Button
          uppercase={false}
          mode="contained"
          onPress={() => console.log("Pressed")}
          color="#07689f"
          style={styles.button}
        >
          <Text style={styles.text}>Reportar</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: "1.5rem",
  },

  button: {
    borderRadius: 2,
    height: "2.5rem",
    justifyContent: "center",
  },

  text: {
    fontFamily: "ubuntu",
  },
});

export default Form;
