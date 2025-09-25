import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.welcomeHeading}>Welcome</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    gap: 10,
    // alignItems: 'center',
  },
  welcomeHeading: {
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
