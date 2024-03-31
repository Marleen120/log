import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
   
  }


  
  //   const userData = {
  //     username: username,
  //     password: password,
  //   };
  
  //   const params = {
  //     "firstName": "Demo",
  //     "lastName": "User",
  //     "email": "testakhn@gmail.com",
  //     "password": "12345678",
  //     "confirmPassword": "12345678",
  //     "signUpType": "EMAIL"
  //   };
  
  //   const headers = {
  //     'Content-type': 'application/json'
  //   };
  
  //   axios.post('https://dev.iqrakitab.net/api/signup', params, {
  //       headers: headers
  //     })
  //     .then(res => {
  //       console.log("I'm successful", res.data);
  //     })
  //     .catch(err => {
  //       console.log('This is an error', err);
  //     });
  // };
  
      
      

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignupScreen;
