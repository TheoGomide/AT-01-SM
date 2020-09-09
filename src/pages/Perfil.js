import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Perfil() {
    return (
        <View style={styles.container}>

            <Image
                style={{width: 150, height: 150,borderRadius: 400/ 2 ,alignItems: 'center',}}
                source={require('../../assets/img.png')}>
            </Image>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>{"\n"}Theo Grings Gomide</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>17 anos</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Cursando Técnico de Informática {"\n"} </Text>

            <View style={[styles.views, styles.ident1]}>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Jogador dedicado de: </Text>
            <Text style={{ fontSize: 15 }}> Fate/ Grand Order </Text>
            <Text style={{ fontSize: 15 }}> Arknights </Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}> {"\n"} Portador de um fone ruim </Text>
            <Text style={{ fontSize: 10 }}> Toddy melhor que Nescau {"\n"}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafafa',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      paddingTop: 40,
    },

    views: {
      width: 300,
      height: 170,
      margin: 15,
      borderRadius: 6,
      alignItems: "center",
    },

    ident1: {
      backgroundColor:'#919191',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 60,
      width: 300,
      height: 250

    }, 
    });