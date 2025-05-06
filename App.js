import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './View/Counter/CounterView';
const Stack = createNativeStackNavigator();

import { enableScreens } from 'react-native-screens';
enableScreens();  

const HomeView = ({ navigation }) => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Counter', { itemId: item.id, itemTitle: item.title })}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* 리스트 화면 */}
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ title: 'Item List' }}
          />
          <Stack.Screen
            name="Counter"
            component={Counter}
            options={{ title: 'Counter' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }