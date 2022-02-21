import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { showMessage, hideMessage } from "react-native-flash-message";
import RadioInput from "./RadioInput";
import TextUserInput from "./TextUserInput";

const Form = () => {
  const [radioOption, setRadioOption] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View>
      <View style={styles.content}>
        <RadioInput
          selected={radioOption === "absent"}
          setSelect={setRadioOption}
          id="absent"
          label="O profissional não compareceu."
        />
        <RadioInput
          selected={radioOption === "bad-service"}
          setSelect={setRadioOption}
          id="bad-service"
          label="O profissional não prestou um bom serviço."
        />
        <RadioInput
          selected={radioOption === "other"}
          setSelect={setRadioOption}
          id="other"
          label="Outro."
        />

        <TextUserInput
          paddingBottom="1rem"
          placeholder="Título"
          value={title}
          setValue={setTitle}
        />
        <TextUserInput
          paddingBottom="7rem"
          placeholder="Especifique aqui o que houve."
          style={{ marginBottom: "2rem" }}
          value={description}
          setValue={setDescription}
        />

        <Button
          uppercase={false}
          mode="contained"
          onPress={() => {
            showMessage({
              message: "Informe enviado com sucesso!",
              description:
                "Utilizaremos seu feedback para melhorarmos a qualidade do nosso serviço.",
              type: "success",
            });
          }}
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
