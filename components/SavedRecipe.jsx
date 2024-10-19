import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';
import Saved_Recipe from '../assets/Saved_Recipe.jpg'
import Saved_Recipe2 from '../assets/Saved_Recipe2.jpg'
const SavedRecipe = ({ navigation }) => {
  return (
    <View>
        <Text style={styles.text}>Saved Recipes</Text>
        <TouchableOpacity style={styles.touchable} 
        onPress={() => navigation.navigate('Recipe')}>
            <Text>Low Sodium Vegetarian Chili</Text>
            <Image source={Saved_Recipe} style={styles.image}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
        <Text>New York Times One</Text>
        OnPress={() => navigation.navigate('Recipe')}
        <Image source={Saved_Recipe2} style={styles.image}/>
        
        <Nav></Nav>
        </TouchableOpacity>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
        alignSelf: 'center',
        marginBottom: 5,
    },
    image: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center'
      },    
   
})
  export default SavedRecipe;