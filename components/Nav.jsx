import React from 'react';
import {View,  Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Nav = ({ }) => {
    const navigation = useNavigation();
  return (
    <View >
      <Button
        title="Post"
        onPress={() => navigation.navigate('PostRecipe')}
      />
      <Button
        title="FindRecipe"
        onPress={() => navigation.navigate('FindRecipe')}
        
      />
      <Button
        title="SavedRecipe"
        onPress={() => navigation.navigate('SavedRecipe')}
        
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

    
  export default Nav;