import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import NewCustomHook from './NewCustomHook';

// const myDummyArray = [
//   { key: 1, title: 'Marleen' },
//   { key: 2, title: 'Marleen' }
// ];



const Home = ({ navigation }) => {

  const goAhead = () => {
    navigation.navigate('Notifications', { data: "Hi " });
  };
const [count,setCount]=useState(0)
const [number,setNumber]=useState(0)
const [flg,setFlg]=useState(0)
// const [data,setData]=useState()

const {data}=NewCustomHook('https://reactnative.dev/movies.json');


useEffect(() => {
  console.log("This is a simple useEffect");
  
  return () => {
    console.log("Unmounted"); //back kro to aglay page(component) ka koi function call ho
  }
}, []);


useEffect(()=>{

console.log('count use effect')
},[count]

)

useEffect(()=>{

  console.log('all arguments useeffect')
  },[count,number,flg])

  //GET API
  // useEffect(() => {
  //   console.log("");
  //   axios.get('https://reactnative.dev/movies.json')
  //     .then((response) => {
  //       console.log("Data fetched using get api:");
  //       console.log(response.data.movies);
  //       setData(response.data.movies);
  //     })
  // }, []); // Ensure this useEffect runs only once by passing an empty dependency array
  


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Home!
      </Text>

      <Text style={styles.text}>
        count is = {count} & number is = {number}
      </Text>
      <Button title="Go to Notifications"
        onPress={goAhead}
        style={styles.button} />

       <Button title=
        "Update state for count useEffect"
        onPress={()=>
          setCount(count+10)
        }
        style={styles.button} />

        <Button title=
        "Update state for number useEffect"

        onPress={()=>
          setNumber(number+10)
        }
        style={styles.button} /> 

       

      <View style={styles.anotherView}>
        <FlatList
          data={data}
          // keyExtractor={item => item.key}
          renderItem={({ item }) => (


            <View style={{backgroundColor:'grey'}}> 
            <Text style={{ fontSize: 20 }}>

            {item.id}
            {"         "}

            {item.title}
              
            </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '50%',
    marginBottom:'20'
  },
  anotherView: {
    marginTop: 20,
   justifyContent:'center',
   textAlign:'center',
  


  },
});

export default Home;


