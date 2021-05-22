import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Event from "../components/even-item.component";
import data from "../data/data";

const Events = () => {
  return (
    <View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.eventTitle}>
          <Text style={styles.title}>Events</Text>
        </View>
        <View style={styles.eventContainer}>
          {data.map(({ id, ...data }) => (
            <Event key={id} {...data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  scrollViewContainer: {
    paddingTop: 25,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  eventTitle: {
    alignItems: "center",
  },
  title: {
    backgroundColor: "white",
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: 7,
    padding: 5,
  },
});

export default Events;
