import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonWrapper}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 5,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
