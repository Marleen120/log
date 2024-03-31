import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Notifications = ({ navigation, route }) => {
  const { data } = route.params;
  const [flag, setFlag] = useState(100);

  const handleLoginPress = () => {
    setFlag(flag + 1000);
    console.log(flag);
  };

  const handleChatPress = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Screen</Text>
      <Text style={styles.text}>Data received is = {data}</Text>
      <Text style={styles.text}>Flag value = {flag}</Text> 
      <LoginButton onPress={handleLoginPress} />
      <ChatButton onPress={handleChatPress} />
    </View>
  );
};

const LoginButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Value" onPress={onPress} />
    </View>
  );
};

const ChatButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Go to Chat" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 5,
  },
});

export default Notifications;
