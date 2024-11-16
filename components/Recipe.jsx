import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';

const Recipe = ({ route }) => {
    const {name, creator, directions, ingredients, image} = route.params;
  return (
    <View>
        <Text>{name}</Text>
        <Text>{creator}</Text>
        <Text>{directions}</Text>
        <Text>{ingredients}</Text>
        <Image source={image} style={styles.image}/>
        <Nav></Nav>
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default Recipe;