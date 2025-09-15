import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

export default function HomeScreen() { 
  const [userName, setText] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const onLogin = () => {
    if(userName !== 'admin'){
      Alert.alert(
        '温馨提示',
        '用户名错误',
        [
          { text: '确定' }
        ],
        { cancelable: false }
      )
      return
    }
    if(password !== '123'){
      Alert.alert(
        '温馨提示',
        '密码错误',
        [
          { text: '确定' }
        ],
        { cancelable: false }
      )
      return
    }
    router.push('/(tabs)')
  };
  
  return (
    <View style={styles.mainContainer}>
       <View style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}> 
          <ThemedText type='subtitle'>请登录</ThemedText>
        </ThemedView>
        <TextInput style={styles.input} placeholderTextColor={'#999'} placeholder="请输入用户名admin" onChangeText={(text: string) => setText(text)} />
        <TextInput style={styles.input} textContentType='password' secureTextEntry={true} placeholderTextColor={'#999'} placeholder="请输入密码123"  onChangeText={(text: string) => setPassword(text)} />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
  button: {
    width: '80%',
    backgroundColor: '#3355ff',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
