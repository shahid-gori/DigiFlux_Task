import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import {useDispatch} from 'react-redux';
import {fetchProducts} from '../screens/store/productSlice';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchProducts());
  }, [dispatch]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
