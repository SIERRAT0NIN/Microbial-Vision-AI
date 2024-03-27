import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomePage from "./components/HomePage";
import { config } from "@gluestack-ui/config";

import { GluestackUIProvider, T } from "@gluestack-ui/themed";
import { Image } from "react-native";

export default function App() {
  const uri =
    "file:///Users/albertosierra/Library/Developer/CoreSimulator/Devices/7D731E19-AC21-4B3D-AB81-DB3998F4D4FD/data/Containers/Data/Application/C101017F-7431-401E-AB5B-96A87FA67BAA/Library/Caches/ExponentExperienceData/@anonymous/OpenAI-Vision-f63fd968-c646-4d4a-bf03-6539c4616b8f/Camera/21466050-AE05-45EC-8FAF-7F91D27DA445.jpg";
  return (
    <GluestackUIProvider config={config}>
      <View className="flex-1 bg-emerald-300 align-middle justify-center">
        <SafeAreaView>
          <ScrollView>
            <HomePage />
            <StatusBar style="auto" />
            {/* <Image source={{ uri }} style={styles.image} /> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </GluestackUIProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "emerald-300", // Make sure to use a valid color value
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300, // Set your desired width
    height: 300, // Set your desired height
  },
});
