import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Text>Navbar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "3rem",
    backgroundColor: "#006557",
  },

  content: {
    marginHorizontal: "1.75rem",
    height: "100%",
    justifyContent: "center",
  },
});

export default Navbar;
