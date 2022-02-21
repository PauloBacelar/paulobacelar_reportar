import React from "react";
import { StyleSheet, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <View style={styles.screen}>
      <Navbar />
      <Form />
      <FlashMessage position="top" marginTop={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f8f8",
  },
});

export default App;
