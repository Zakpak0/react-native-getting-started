import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import globoTickets from "./TicketsDB";

const TicketPurchase = ({ route, navigation }) => {
  const [ticketQuantity, setTicketQuantity] = useState("1");
  const { tickId } = route.params;
  const selectedEvent = globoTickets.find(
    (ticket) => ticket.eventId === tickId
  );

  const purchase = () => {
    let price = selectedEvent.price * ticketQuantity;
    Alert.alert(`Your cost is ${price}`);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image style={styles.ticketimage} source={selectedEvent.image} />
      <Text style={styles.shortdescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaserow}>
        <Text styles={styles.quantity}>Quantity: </Text>
        <TextInput
          styles={styles.quantityinput}
          onChangeText={(quantity) => setTicketQuantity(quantity)}
          value={ticketQuantity}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.price}>
          Total Price: ${selectedEvent.price * ticketQuantity}
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={purchase}>
            <Text style={styles.buttontext}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  purchaserow: {
    flexDirection: "row",
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 180,
  },
  title: {
    paddingBottom: 10,
  },
  ticketimage: {
    width: "100%",
    height: 180,
  },
  shortdescription: {
    paddingTop: 5,
    textAlignVertical: "center",
  },
  description: {
    textAlign: "left",
    fontWeight: "600",
    padding: 10,
  },
  price: {
    paddingTop: 5,
    paddingBottom: 10,
    textAlign: "center",
  },
  buttontext: {
    textAlign: "center",
    padding: 5,
  },
  quantity: {
    borderStyle: "solid",
  },
  quantityinput: {
    borderWidth: 1,
    height: 38,
    width: 40,
    paddingLeft: 25,
  },
});

export default TicketPurchase;
