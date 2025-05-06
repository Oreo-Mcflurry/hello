// App.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter Example</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="+"   onPress={() => setCount(c => c + 1)} />
        <Button title="–"   onPress={() => setCount(c => c - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 20, 
    marginBottom: 16
  },
  count: {
    fontSize: 48, 
    marginVertical: 16
  },
  buttons: {
    flexDirection: 'row', 
    width: '60%', 
    justifyContent: 'space-around'
  }
});