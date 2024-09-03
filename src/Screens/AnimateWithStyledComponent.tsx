import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const AnimateWithStyledComponent = () => {
  const translateX = useSharedValue(0);
  const slideAnimatedStyle = () => {
    //this show the current value or the value to be incremented in useShared Value
    translateX.value = translateX.value + 50;
  };
  const animatedStyles = useAnimatedStyle(() => ({
    //function check for the value to be calculated based upon condition
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));

  return (
    <View style={styles.cotainer}>
      <Animated.View
        // style={[styles.box, {transform: [{translateX: translatex}]}]}
        style={[styles.box, animatedStyles]}
      />
      <Button onPress={slideAnimatedStyle} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
  },
});
