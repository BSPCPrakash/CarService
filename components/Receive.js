import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Receive = () => {
  return <Text style={styles.receiveText}>􀄩 Receive</Text>;
};

const styles = StyleSheet.create({
  receiveText: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
});

export default Receive;
