import * as React from "react";
import { StyleSheet, View } from "react-native";

const Transfer = () => {
  return <View style={styles.transferView} />;
};

const styles = StyleSheet.create({
  transferView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 138,
    height: 50,
  },
});

export default Transfer;
