import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {AnimatingStylesAndProps, YourFirstAnimation} from './components';

const Sections = [
  {
    title: 'Your First Animation',
    component: YourFirstAnimation,
  },
  {
    title: 'Animating styles and props',
    component: AnimatingStylesAndProps,
  },
];

const Fundamentals = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {Sections.map(({title, component: Component}) => (
          <View style={styles.wrapper} key={title}>
            <Text style={styles.title}>{title}</Text>
            <Component />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export {Fundamentals};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
