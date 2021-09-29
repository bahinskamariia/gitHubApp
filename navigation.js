import React from 'react';
import Main from './src/components/Main/Main';
import SavedList from './src/components/SavedList/SavedList';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="SavedList" component={SavedList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
