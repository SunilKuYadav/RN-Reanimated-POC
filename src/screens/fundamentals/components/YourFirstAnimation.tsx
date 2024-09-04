import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

import {Button} from '../../../components';

const YourFirstAnimation = () => {
  const width = useSharedValue(100);

  const handleIncreaseWidth = () => {
    width.value = width.value + 10;
  };

  const handleIncreaseWidthWithSpring = () => {
    width.value = withSpring(width.value + 10);
  };

  const handleResetWidth = () => {
    width.value = 100;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            width,
          },
        ]}
      />

      <Button title="Reset the width" onPress={handleResetWidth} />
      <Button title="Decrease the width" onPress={handleIncreaseWidth} />
      <Button
        title="Increase the width with spring"
        onPress={handleIncreaseWidthWithSpring}
      />
    </SafeAreaView>
  );
};

export {YourFirstAnimation};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  animatedView: {
    height: 100,
    backgroundColor: 'violet',
  },
});
