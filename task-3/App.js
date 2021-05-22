import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Events from "./screens/events.screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./styles/colors.styles";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Events />
          <TouchableOpacity style={styles.msgBtn}>
            <Icon name="comment" style={styles.icon} color="#000" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.darkBg,
    paddingBottom: 10,
  },
  container: {
    backgroundColor: colors.darkBg,
  },
  msgBtn: {
    backgroundColor: colors.primaryColor,
    borderRadius: 100 / 2,
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  icon: {
    flex: 1,
    padding: 21,
  },
});
