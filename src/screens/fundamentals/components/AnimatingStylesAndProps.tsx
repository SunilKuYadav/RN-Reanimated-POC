import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Button} from '../../../components';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatingStylesAndProps = () => {
  // functionality to move x axis
  const translateX = useSharedValue(0);
  const handleMoveX = () => {
    translateX.value += 50;
  };
  const handleMoveXReset = () => {
    translateX.value = 0;
  };
  const animatedXAxisStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(translateX.value * 1.5)}],
    };
  });

  // functionality to change radius
  const radius = useSharedValue(10);
  const handleChangeRadius = () => {
    radius.value += 10;
  };
  const handleResetRadius = () => {
    radius.value = 10;
  };
  const animatedRadiusStyle = useAnimatedProps(() => {
    return {
      r: withSpring(radius.value),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, animatedXAxisStyle]} />
      <View style={styles.buttonContainer}>
        <Button title="Move x" onPress={handleMoveX} />
        <Button title="Reset" onPress={handleMoveXReset} />
      </View>
      <View style={styles.circleWrapper}>
        <Svg>
          <AnimatedCircle
            cx="50%"
            cy="50%"
            animatedProps={animatedRadiusStyle}
            fill="violet"
          />
        </Svg>
        <View style={styles.buttonContainer}>
          <Button title="Change radius" onPress={handleChangeRadius} />
          <Button title="Reset radius" onPress={handleResetRadius} />
        </View>
      </View>
    </View>
  );
};

export {AnimatingStylesAndProps};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  animatedContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'violet',
  },
  circleWrapper: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
