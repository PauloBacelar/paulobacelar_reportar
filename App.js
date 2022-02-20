import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <View style={styles.screen}>
      <Navbar />

      <Text>Example text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f8f8",
  },
});

export default App;
