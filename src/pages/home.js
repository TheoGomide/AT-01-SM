
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Camera from 'react-native-vector-icons/MaterialCommunityIcons';
Camera.loadFont()
import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont()
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()

export function home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Perfil')}>
              <User name="user" size={20} color='#010101'></User>
              <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Perfil </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Cam')}>
              <Camera name="camera" size={20} color='#010101'></Camera>
              <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Câmera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
                    onPress={() => { BackHandler.exitApp()}}>
                    <Exit name="sign-out" size={20} color='#010101'></Exit> 
                    <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Sair </Text>      
                </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      paddingTop: 40,
    },
    
    views: {
      width: 200,
      height: 200,
      margin: 15,
      borderRadius: 5,
      alignItems: "center",
    },
  
    ident1: {
      backgroundColor:'#ffff',
      shadowColor: '#fff5',
      alignItems: 'center',
      borderRadius: 10,
      width: 200,
      height: 150,
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 2},
      elevation: 7,
      padding: 55,
      margin: 20,
      
    },
    });