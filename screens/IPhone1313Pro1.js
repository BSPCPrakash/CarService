import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone1313Pro1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro1}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.fileShareText}>FileShare</Text>
      <View style={styles.lGboxView}>
        <View style={styles.rectangleView} />
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.usernameView}>
          <Text style={styles.usernameText}>Username</Text>
          <View style={styles.rectangleView1} />
        </View>
        <View style={styles.passwordView}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.rectangleView2} />
        </View>
        <Pressable
          style={styles.loginbtnPressable}
          onPress={() => navigation.navigate("IPhone1313Pro2")}
        >
          <View style={styles.rectangleView3} />
          <Text style={styles.loginText1}>Login</Text>
        </Pressable>
        <Text style={styles.reagisterAccountText}>Reagister Account</Text>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>
      <Image
        style={styles.busyDayAtTheOffice1}
        resizeMode="cover"
        source={require("../assets/busy-day-at-the-office--1.png")}
      />
      <View style={styles.rectangleView4} />
      <Image
        style={styles.girlAndBoySittingWithLapt}
        resizeMode="cover"
        source={require("../assets/girl-and-boy-sitting-with-laptop-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 220,
    height: 220,
  },
  fileShareText: {
    position: "absolute",
    top: 28,
    left: 8,
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 24,
    backgroundColor: "rgba(138, 142, 254, 0.61)",
    width: 300,
    height: 400,
  },
  loginText: {
    position: "absolute",
    top: 16,
    left: 105,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  usernameText: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 34,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fbf4f4",
    width: 251,
    height: 40,
  },
  usernameView: {
    position: "absolute",
    top: 76,
    left: 24,
    width: 251,
    height: 74,
  },
  passwordText: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 34,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fbf4f4",
    width: 251,
    height: 40,
  },
  passwordView: {
    position: "absolute",
    top: 166,
    left: 24,
    width: 251,
    height: 74,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#7572fd",
    width: 100,
    height: 34,
  },
  loginText1: {
    position: "absolute",
    top: 7,
    left: 28,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  loginbtnPressable: {
    position: "absolute",
    top: 280,
    left: 95,
    width: 100,
    height: 34,
  },
  reagisterAccountText: {
    position: "absolute",
    top: 334,
    left: 25,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  forgotPasswordText: {
    position: "absolute",
    top: 354,
    left: 25,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: "#fff",
    textAlign: "left",
  },
  lGboxView: {
    position: "absolute",
    top: 222,
    left: 45,
    width: 300,
    height: 400,
  },
  busyDayAtTheOffice1: {
    position: "absolute",
    top: 650,
    left: 8,
    width: 375,
    height: 187,
  },
  rectangleView4: {
    position: "absolute",
    top: 70.71,
    left: 225,
    width: 100,
    height: 100,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  girlAndBoySittingWithLapt: {
    position: "absolute",
    top: 0,
    left: 259,
    width: 131,
    height: 152,
  },
  iPhone1313Pro1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro1;
