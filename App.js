import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import Home from "./Home";
import Notifications from "./Notifications";
import Login from "./Loginn";
import ChatScreen from './Chat';
import Inbox from './Inbox';

// import Labt from "./Labt";





import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from './Signup';


export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: true }} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Signup" component={SignupScreen} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
  }
});
