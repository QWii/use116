import React, {useState, createContext, useContext} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Test1Screen from './component/Text1Screen';
import Test2Screen from './component/Text2Screen';
import HomeScreen from './component/HomeScreen';
import SettingsScreen from './component/SettingsScreen';
import NumberCount from './component/Number';

// function SettingsScreen() {
//   const storedEvents = useContext(AppContext);
//   const [aanum , setAanum] = useState(10);
//   console.log(storedEvents);
//   return (
//     <View style={styles.container}>
//       <Button title='3333' onPress={()=>{
//         setAanum(aanum+1)
//       }}></Button>
//       <Text>Settings!<NumberCount num={aanum} /></Text>
//       <Button title="logout" onPress={() => storedEvents.setIsLogin(false)} />
//     </View>
//   );
// }



const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home232"
        component={HomeScreen}
        tabbaron
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Test1"
        component={Test1Screen}
        options={{
          tabBarLabel: 'Test1',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Test2"
        component={Test2Screen}
        options={{
          tabBarLabel: 'Test2',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="face-man" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

// use context
const AppContext = createContext();
const AppProvider = props => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('molly');
return (
    <AppContext.Provider value={{isLogin, setIsLogin, name}}>
      {props.children}
    </AppContext.Provider>
  );
};
const Home = () => {
  const storedEvents = useContext(AppContext);
  const login = () => {
    storedEvents.setIsLogin(true);
    console.log('you are login')
  };
  if (!storedEvents.isLogin) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.loginTitle}> App!</Text>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
          <Text style={styles.loginBtnTxt}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    color: 'black',
    fontSize: 20,
  },
  loginBtn: {
    width: 80,
    height: 40,
    border: '1px solid black',
    backgroundColor: '#00f0aa',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  loginBtnTxt: {fontSize: 20, fontWeight: 'bold', color: 'black'},
});
export default App;