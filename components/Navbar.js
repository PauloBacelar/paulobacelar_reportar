import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <AntDesign name="arrowleft" size={24} color="white" />

        <Text style={styles.text}>Reportar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "3rem",
    backgroundColor: "#006557",
    marginBottom: "2rem",
  },

  content: {
    marginHorizontal: "1.5rem",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontFamily: "Ubuntu",
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Navbar;
