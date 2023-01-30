import { View, Text, StyleSheet } from "react-native";

function Test2Screen() {
    return (
      <View style={styles.container}>
        <Text>Test2Screen!</Text>
      </View>
    );
  }

export default Test2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
