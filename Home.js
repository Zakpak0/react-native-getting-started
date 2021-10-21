import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import Menu from "./Menu";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globolog}
        source={require("./images/_Export_globoticket-bug-black.png")}
      />
      <Text style={styles.title}>Welcome To GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image style={styles.heroimage} source={require("./images/boxing.jpg")} />
      <View style={styles.textcontainer}>
        <Text style={styles.context}>{introText}</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  globolog: {
    height: 100,
    width: 150,
  },
  title: {},
  subtitle: {
    paddingTop: 5,
  },
  textcontainer: {
    padding: 20,
  },

  context: {},
  heroimage: {
    height: 170,
    width: "100%",
  },
  menu: {
    position: "absolute",
    bottom: 10,
  },
});

const introText =
  "Are you ready for the best events? Whether you are into sports, music, or the most amzing seminars we have got you covered Get ready to purchase great tickets at the best prices. Events are in-person and virtual.";

export default Home;
