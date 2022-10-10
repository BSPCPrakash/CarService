import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone1313Pro4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro4}>
      <Pressable
        style={styles.menuBarPressable}
        onPress={() => navigation.navigate("IPhone1313Pro3")}
      >
        <View style={styles.rectangleView} />
        <View style={styles.receiveView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.receiveText}>􀄩 Receive</Text>
        </View>
        <Pressable
          style={styles.transferPressable}
          onPress={() => navigation.navigate("IPhone1313Pro2")}
        >
          <View style={styles.transferView} />
          <Text style={styles.transferText1}>
            <Text style={styles.text}>􀄨</Text>
            <Text style={styles.transferText}>Transfer</Text>
          </Text>
        </Pressable>
        <View style={styles.historyView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.historyText}>􀐫History</Text>
        </View>
      </Pressable>
      <View style={styles.titleView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.fileShareText}>FileShare</Text>
      </View>
      <View style={styles.view}>
        <View style={styles.rectangleView4} />
        <Text style={styles.transferdFileText}>Transferd File</Text>
        <Text style={styles.typePhotoText}>Type: Photo</Text>
        <Text style={styles.abhiText}>@Abhi</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </View>
      <View style={styles.view1}>
        <View style={styles.rectangleView5} />
        <Text style={styles.receivedFileText}>Received File</Text>
        <Text style={styles.typePhotoText1}>Type: Photo</Text>
        <Text style={styles.saiText}>@Sai</Text>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
      </View>
      <View style={styles.view2}>
        <View style={styles.rectangleView6} />
        <Text style={styles.transferdFileText1}>Transferd File</Text>
        <Text style={styles.typeAppText1}>
          <Text style={styles.typeAppText}>Type: App</Text>
        </Text>
        <Text style={styles.revText}>@Rev</Text>
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/12.png")}
        />
      </View>
      <View style={styles.view3}>
        <View style={styles.rectangleView7} />
        <Text style={styles.receivedFileText1}>Received File</Text>
        <Text style={styles.typeVideoText}>Type: Video</Text>
        <Text style={styles.zachText}>@Zach</Text>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/13.png")}
        />
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
  receiveView: {
    position: "absolute",
    top: 0,
    left: 252,
    width: 138,
    height: 50,
  },
  transferView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
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
  historyView: {
    position: "absolute",
    top: 0,
    left: 138,
    width: 114,
    height: 50,
  },
  menuBarPressable: {
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
    backgroundColor: "#e5e7eb",
    width: 337,
    height: 100,
  },
  transferdFileText: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  typePhotoText: {
    position: "absolute",
    top: 36,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  abhiText: {
    position: "absolute",
    top: 59,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 221,
    width: 116,
    height: 100,
  },
  view: {
    position: "absolute",
    top: 95,
    left: 26,
    width: 337,
    height: 100,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    width: 337,
    height: 100,
  },
  receivedFileText: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  typePhotoText1: {
    position: "absolute",
    top: 36,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  saiText: {
    position: "absolute",
    top: 59,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  icon1: {
    position: "absolute",
    top: 0,
    left: 221,
    width: 116,
    height: 100,
  },
  view1: {
    position: "absolute",
    top: 225,
    left: 26,
    width: 337,
    height: 100,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    width: 337,
    height: 100,
  },
  transferdFileText1: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  typeAppText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  typeAppText1: {
    position: "absolute",
    top: 36,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  revText: {
    position: "absolute",
    top: 59,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  icon2: {
    position: "absolute",
    top: 0,
    left: 221,
    width: 116,
    height: 100,
  },
  view2: {
    position: "absolute",
    top: 364,
    left: 26,
    width: 337,
    height: 100,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    width: 337,
    height: 100,
  },
  receivedFileText1: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
    width: 177,
  },
  typeVideoText: {
    position: "absolute",
    top: 36,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  zachText: {
    position: "absolute",
    top: 59,
    left: 18,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#000",
    textAlign: "left",
  },
  icon3: {
    position: "absolute",
    top: 0,
    left: 221,
    width: 116,
    height: 100,
  },
  view3: {
    position: "absolute",
    top: 493,
    left: 26,
    width: 337,
    height: 100,
  },
  iPhone1313Pro4: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro4;
