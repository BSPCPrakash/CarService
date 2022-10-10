import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone1313Pro2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro2}>
      <View style={styles.titleView}>
        <View style={styles.rectangleView} />
        <Text style={styles.fileShareText}>FileShare</Text>
      </View>
      <View style={styles.uploadBoxView}>
        <View style={styles.rectangleView1} />
        <View style={styles.uploadView}>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <Text style={styles.uploadText}>Upload􀈄</Text>
        </View>
        <Text style={styles.selectFilesFromTheDevice}>
          Select files from the device
        </Text>
      </View>
      <View style={styles.transferBtnView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.transferFileText}>Transfer File􀈟</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 93,
  },
  fileShareText: {
    position: "absolute",
    top: 43,
    left: 101,
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "900",
    fontFamily: "SF Pro",
    color: "#fbf4f4",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    top: -36,
    left: 0,
    width: 390,
    height: 93,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    width: 337,
    height: 100,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 100,
    height: 31,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "rgba(138, 142, 254, 0.61)",
    width: 100,
    height: 31,
  },
  uploadText: {
    position: "absolute",
    top: 6,
    left: 12,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  uploadView: {
    position: "absolute",
    top: 34,
    left: 204,
    width: 100,
    height: 31,
  },
  selectFilesFromTheDevice: {
    position: "absolute",
    top: 22,
    left: 22,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  uploadBoxView: {
    position: "absolute",
    top: 92,
    left: 24,
    width: 337,
    height: 100,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "rgba(138, 142, 254, 0.61)",
    width: 173,
    height: 45,
  },
  transferFileText: {
    position: "absolute",
    top: 11,
    left: 12,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  transferBtnView: {
    position: "absolute",
    top: 221,
    left: 109,
    width: 173,
    height: 45,
  },
  iPhone1313Pro2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro2;
