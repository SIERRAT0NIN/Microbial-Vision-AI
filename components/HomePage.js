import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AiResponse from "./OpenAiResponse";
import UserInput from "./UserInput";

const HomePage = () => {
  return (
    <View>
      <UserInput />
      <AiResponse />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
