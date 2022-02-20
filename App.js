import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <View style={styles.screen}>
      <Navbar />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f8f8",
  },
});

export default App;
