import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors.styles";

const Event = ({ loc, date, title, time }) => {
  return (
    <View style={styles.event}>
      <View style={styles.titleContainer}>
        <Text style={[styles.eventTitle, styles.date]}>{date}</Text>
        <Text style={styles.eventTitle}>{title}</Text>
      </View>
      <View>
        <View style={styles.timeContainer}>
          <Text style={[styles.eventTitle, styles.eventTime]}>{time}</Text>
        </View>
        <View style={styles.locContainer}>
          <Text style={styles.eventLoc}>{loc}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.locContainer}>
          <Text style={styles.btnText}>+ Event Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  event: {
    borderBottomColor: colors.borderColor,
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomWidth: 2,
    paddingHorizontal: 15,
  },

  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingBottom: 15,
  },

  date: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  eventTitle: {
    color: "white",
    fontSize: 20,
    paddingBottom: 5,
  },

  timeContainer: {
    alignItems: "flex-start",
  },

  eventTime: {
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingBottom: 15,
  },

  locContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  eventLoc: {
    color: colors.descColor,
    fontSize: 18,
  },

  btnText: {
    color: colors.primaryColor,
    fontSize: 18,
    backgroundColor: "transparent",
  },
});

Event.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
};

export default Event;
