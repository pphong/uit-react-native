import React, { useState } from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop1Screen from "./shop-1";
import Shop2Screen from "./shop-2";
import Shop3Screen from "./shop-3";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tab = createBottomTabNavigator();
  const [cartItems, setCartItems] = useState<any[]>([]);

  return (
    <Tab.Navigator
      initialRouteName="HomeShop"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeShop"
        options={{
          title: "Product List",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      >
        {() => <Shop1Screen></Shop1Screen>}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="cart.badge.plus" color={color} />
          ),
        }}
      >
        {() => <Shop2Screen></Shop2Screen>}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          title: "User Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="d.square" color={color} />
          ),
        }}
        component={Shop3Screen}
      />
    </Tab.Navigator>
  );
}
