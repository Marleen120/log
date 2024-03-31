// import React, {useState, useEffect} from 'react';
// // import * as React from "react"
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import Axios from 'react-native-axios/lib/core/Axios';
// import axios from 'axios';
// import { View , Text,TouchableOpacity,FlatList,Item} from "react-native";

// export default function Labt ({navigation,route}){
//     const citiesarr = [{key:0,title:'islambad'} , {key:1,title:'Bahawalnagar'},]

//     useEffect(() =>{
//         console.log("Inside useEffect ")

//         AsyncStorage.getItem('w').then((data) => {
//             if(data){
                
//                 console.log('data found in local db , fetching it ...')
//                 let parsedData=JSON.parse(data);
//                 console.log("Data from local db : " , parsedData)
//             }
//             else{
//                 console.log("Data was not in local db. Now setting in local db ...")
//                 AsyncStorage.setItem('w',JSON.stringify(citiesarr))
//                 console.log('Data stored successfully in local db ')
//             }
//         }).catch( error => console.log(error))
//     })
    
//     useEffect(() =>{
//         console.log("Inside useEffect []")
//         axios.get('https://reactnative.dev/movies.json').then((response) =>{
//             if(response){
//                 console.log("Inside if of axios.get ")

//                 console.log("Get api response is : ",response)

//             }
//             else{
//                 console.log('No response received ')
//             }
//         }).catch( error => console.log(error))
//     },[])
//     return( 
       
       

//        <View>
//         <Text> lab task</Text>
//         {/* <FlatList
//         data={citiesarr}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       /> */}

//        </View>


//     );
// }