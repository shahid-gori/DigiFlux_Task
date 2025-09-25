import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import RootStackNavigator from './RootStackNavigator';

const Drawer = createDrawerNavigator();

export default function AuthDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTabs" component={RootStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
