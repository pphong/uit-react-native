import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Flower1Screen from "./flower-1";
import Flower2Screen from "./flower-2";
import Flower3Screen from "./flower-3";

export default function FlowerLayout() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="flower-1"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="flower-1"
        options={{
          title: "Flower types",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
        component={Flower1Screen}
      ></Tab.Screen>
      <Tab.Screen
        name="flower-2"
        options={{
          title: "Flower list",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
        component={Flower2Screen}
      ></Tab.Screen>
      <Tab.Screen
        name="flower-3"
        options={{
          title: "Flower detail",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
        component={Flower3Screen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
