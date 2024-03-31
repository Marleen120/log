
import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';



const NewCustomHook=(URL)=>{
    const[data,setData]=useState();

    useEffect(() => {
        console.log("");
        axios.get(URL)
          .then((response) => {
            console.log("Data fetched using get api:");
            console.log(response.data.movies);
            setData(response.data.movies);
          })
      }, []); 

return {data};

}
export default NewCustomHook;
