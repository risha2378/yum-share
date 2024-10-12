import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';
import profilePic from '../assets/recipepfp.png'

const Profile = () => {
  return (
    <View>
        <Image source={profilePic} style={styles.image}/>
        <Text style={styles.text}>Risha Mishra</Text>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
        <Nav></Nav>
    </View>
    

    
  );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 15,
        fontWeight: 'normal'
    }
})

export default Profile;