import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "@gluestack-ui/themed";

const AiResponse = () => {
  const [flaskData, setFlaskData] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.text())
      .then((data) => setFlaskData(data), setLoading(false))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <Spinner /> // Display spinner when loading
      ) : (
        <View>
          <Text className="text-2xl text-black font-extrabold m-3">
            {flaskData}
          </Text>
        </View>
      )}
    </View>
  );
};

export default AiResponse;

const styles = StyleSheet.create({});
