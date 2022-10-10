import * as React from "react";
import { Text, StyleSheet } from "react-native";

const History1 = () => {
  return <Text style={styles.historyText}>􀐫History</Text>;
};

const styles = StyleSheet.create({
  historyText: {
    position: "absolute",
    top: 13,
    left: 11,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
});

export default History1;
