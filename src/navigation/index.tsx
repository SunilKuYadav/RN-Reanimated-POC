import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Fundamentals} from '../screens';
import {Button} from '../components';

const Stack = createNativeStackNavigator();

const Screens = [
  {
    name: 'Fundamentals',
    component: Fundamentals,
  },
];

const InitialScreens = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Re-Animated 3.X</Text>
      <ScrollView>
        {Screens.map((item, index) => (
          <Button
            key={index}
            title={item.name}
            onPress={() => navigation.navigate(item.name)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={InitialScreens}
        options={{headerShown: false}}
      />
      {Screens.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export {Navigation};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
