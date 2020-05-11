import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Twitter from "./Screens/Twitter";
import Inshot from "./Screens/Inshot";

export default function App() {
  return <Inshot />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
