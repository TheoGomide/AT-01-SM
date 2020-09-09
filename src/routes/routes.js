import React from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { home } from '../pages/home';
import { Perfil } from '../pages/Perfil';
import { Cam } from '../pages/Cam';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={home}/>
                <Stack.Screen name="Perfil" component={Perfil}/>
                <Stack.Screen name="Cam" component={Cam}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}