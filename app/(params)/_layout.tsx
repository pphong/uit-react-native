import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Param1Screen from "./param-1";
import Param2Screen from "./param-2";

export default function ParamsLayout() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="param-1"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="param-1"
        options={{
          title: "Home page",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      >
        {() => <Param1Screen></Param1Screen>}
      </Tab.Screen>
      <Tab.Screen
        name="param-2"
        options={{
          title: "second page",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
        component={Param2Screen}
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
}
