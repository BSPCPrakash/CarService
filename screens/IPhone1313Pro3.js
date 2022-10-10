import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Receive from "../components/Receive";
import Transfer from "../components/Transfer";
import History1 from "../components/History1";

const IPhone1313Pro3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro3}>
      <View style={styles.menuBarView}>
        <View style={styles.rectangleView} />
        <View style={styles.receiveView}>
          <View style={styles.rectangleView1} />
          <Receive />
        </View>
        <Pressable
          style={styles.transferPressable}
          onPress={() => navigation.navigate("IPhone1313Pro2")}
        >
          <Transfer />
          <Text style={styles.transferText1}>
            <Text style={styles.text}>􀄨</Text>
            <Text style={styles.transferText}>Transfer</Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.historyPressable}
          onPress={() => navigation.navigate("IPhone1313Pro4")}
        >
          <View style={styles.rectangleView2} />
          <History1 />
        </Pressable>
      </View>
      <View style={styles.titleView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.fileShareText}>FileShare</Text>
      </View>
      <View style={styles.receiveBtnView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.receiveFileText}>Receive File􀄩</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#beb9ff",
    width: 390,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 138,
    height: 50,
  },
  receiveView: {
    position: "absolute",
    top: 0,
    left: 252,
    width: 138,
    height: 50,
  },
  text: {
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: "SF Pro",
  },
  transferText: {
    fontWeight: "700",
    fontFamily: "SF Pro",
  },
  transferText1: {
    position: "absolute",
    top: 11,
    left: 10,
    fontSize: 24,
    color: "#fff",
    textAlign: "left",
  },
  transferPressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 138,
    height: 50,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 114,
    height: 50,
  },
  historyPressable: {
    position: "absolute",
    top: 0,
    left: 138,
    width: 114,
    height: 50,
  },
  menuBarView: {
    position: "absolute",
    top: 794,
    left: 0,
    width: 390,
    height: 50,
  },
  rectangleView3: {
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
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "rgba(138, 142, 254, 0.61)",
    width: 173,
    height: 45,
  },
  receiveFileText: {
    position: "absolute",
    top: 11,
    left: 18,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  receiveBtnView: {
    position: "absolute",
    top: 221,
    left: 109,
    width: 173,
    height: 45,
  },
  iPhone1313Pro3: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro3;
