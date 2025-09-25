import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUserApi} from './store/loginSlice';

const LoginScreen = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const onNextScreen = () => {
    if (userName && password) {
      let request = {
        userName: userName,
        password: password,
      };
      dispatch(loginUserApi(request));
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{'Login'}</Text>
        <TextInput
          value={userName}
          onChangeText={(text: string) => setUserName(text)}
          style={styles.input}
          placeholder={'Enter Username'}
          placeholderTextColor={'#888'}
        />
        <TextInput
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder={'Enter password'}
          placeholderTextColor={'#888'}
        />
        <Button title="Login" onPress={() => onNextScreen()} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
});
