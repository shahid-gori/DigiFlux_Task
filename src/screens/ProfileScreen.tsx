import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from './store/loginSlice';

const ProfileScreen = () => {
  const userData = useSelector((state: any) => state.auth.user);
  //   console.log(userData);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1,padding:10,justifyContent: 'center', gap: 20}}>
        <Text style={{color: '#000', fontSize: 20, alignSelf: 'center'}}>
          userName : {userData?.userName}
        </Text>
        <Button title="Log out" onPress={() => onLogout()} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
