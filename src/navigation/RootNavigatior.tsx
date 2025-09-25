import React from 'react';
import {useSelector} from 'react-redux';
import GuestStack from './GuestStack';
import AuthDrawer from './AuthDrawer';
import {NavigationContainer} from '@react-navigation/native';

export default function RootNavigator() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthDrawer /> : <GuestStack />}
    </NavigationContainer>
  );
}
