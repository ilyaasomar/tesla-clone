import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const _layout = () => {
  return (
    <>
      <Stack
        // screenOptions={{ headerStyle: { backgroundColor: "#161818" } }}
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default _layout;
