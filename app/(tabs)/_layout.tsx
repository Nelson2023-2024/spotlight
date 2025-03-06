import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constanst/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // remove the default names on the tab bar
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle:{
          backgroundColor: "black",
          borderTopWidth: 0,
          position: "absolute",
          elevation:0,
          height:40,
          paddingBottom: 8,
          borderRadius:1
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: (
            { size, color } //default size and color
          ) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: (
            { size, color } //default size and color
          ) => <Ionicons name="bookmark" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: (
            { size } //default size and color
          ) => (
            <Ionicons
              name="add-circle-sharp"
              size={size}
              color={COLORS.primary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: (
            { size, color } //default size and color
          ) => <Ionicons name="notifications" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: (
            { size, color } //default size and color
          ) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
