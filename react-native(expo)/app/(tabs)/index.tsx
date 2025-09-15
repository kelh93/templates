import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { View } from 'react-native';

export default function HomeScreen() { 
  const [userName, setText] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = async () => {
    // await login();
    console.log('login');
  };
  return (
    <View style={styles.mainContainer}>
       <View style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}> 
          <ThemedText type='subtitle'>欢迎👏🏻👏🏻👏🏻</ThemedText>
        </ThemedView>
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
