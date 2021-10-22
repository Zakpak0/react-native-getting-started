import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";
import Tickets from "./Tickets";
import Contact from "./Contact";
import TicketPurchase from "./TicketPurchase";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home {...props} username="Esports Fun" />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Contact Us",
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Purchase Tickets",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
