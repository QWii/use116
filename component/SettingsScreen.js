import { useState } from "react";
import { View, Text,Button, StyleSheet } from "react-native";

import NumberCount from './Number';
function SettingsScreen() {
  // const storedEvents = useContext(AppContext);
  const [aanum , setAanum] = useState(10);
  // console.log(storedEvents);
  return (
    <View style={styles.container}>
      <Button title='Act' onPress={()=>{
        setAanum(aanum-1)
      }}></Button>
      <Text>HP!  <NumberCount num={aanum} /></Text>
      {/* <Button title="logout" onPress={() => storedEvents.setIsLogin(false)} /> */}
    </View>
  );
}


export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
