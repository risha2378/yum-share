import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';
import Saved_Recipe from '../assets/Saved_Recipe.jpg';
import Saved_Recipe2 from '../assets/Saved_Recipe2.jpg';

const SavedRecipe = ({ navigation }) => {
    const recipe1 = {
        name: 'Dish 1',
        creator: 'Alex',
        directions: 'Mix',
        ingredients: 'Water',
        image: {Saved_Recipe},
    }
    const recipe2 = {
        name: 'Dish 2',
        creator: 'Risha',
        directions: 'Stir',
        ingredients: 'Salt',
        image: {Saved_Recipe2},
    }
    
    const handlePress = (recipe) => {
        navigation.navigate('Recipe', recipe);
    }

  return (
    <View>
        <Text style={styles.text}>Saved Recipes</Text>
        
        <TouchableOpacity 
            style={styles.touchable} 
            onPress={() => handlePress(recipe1)}
        >
            <Text>New York Times One</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.touchable} 
            onPress={() => handlePress(recipe2)}
        >
            <Text>Low Sodium Vegetarian Chili</Text>
        </TouchableOpacity>
        
        <Nav></Nav>
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