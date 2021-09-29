import React from 'react';
import Main from './components/Main/Main';
import SavedList from './components/SavedList/SavedList';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name={route.name === 'Search' ? 'search' : 'ios-list'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Search"
          component={Main}
        />
        <Tab.Screen
          name="Saved list"
          component={SavedList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
