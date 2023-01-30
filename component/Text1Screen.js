import { View, Text, StyleSheet } from "react-native";
import NumberCount from "./Number";
 function Test1Screen  ()  {
  
  return (
    <View style={styles.container}>
      <Text><NumberCount num='333'/>Test1Screen!</Text>
    </View>
  );
}

export default Test1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
