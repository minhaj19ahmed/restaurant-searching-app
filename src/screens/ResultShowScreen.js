import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from "../API/Yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
   const id = navigation.getParam('id');
   

   const getResult = async (id) => {
   const response = await Yelp.get (`/${id}`);
    setResult(response.data);
   };
   useEffect(() => {
     getResult(id);
   }, [])
   if (!result) {
       return null;
   }

    return (
    <View>
        <Text>{result.name}</Text>
       <FlatList
       vertical
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
         return <Image style={styles.image} source={{ uri: item }}/>
        }}
       />
    </View>
    );
};


const styles = StyleSheet.create ({
    image: {
        height: 200,
        width: 300,
        margin: 5
    }
});

export default ResultsShowScreen;
