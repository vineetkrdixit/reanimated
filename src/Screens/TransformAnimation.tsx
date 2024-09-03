import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const TransformAnimation = () => {
  const boxToSircle = useSharedValue(0);
  const textAni = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(boxToSircle.value, [0, 1], [0, 100]);
    const height = interpolate(boxToSircle.value, [0, 1], [100, 200]);
    const width = interpolate(boxToSircle.value, [0, 1], [100, 200]);
    const bgColor = interpolateColor(
      boxToSircle.value,
      [0, 1],
      ['skyblue', 'teal'],
    );
    const transform = interpolate(boxToSircle.value, [0, 1], [0, 100]);
    return {
      borderRadius: borderRadius,
      height: height,
      width: width,
      backgroundColor: bgColor,
      transform: [{translateX: transform}],
    };
  }, []);
  // Animated style for the text
  // const animatedStyleFont = useAnimatedStyle(() => {
  //   return {
  //     transform: [{translateX: translateX.value}],
  //   };
  // });
  setInterval(() => {
    if (boxToSircle.value) {
      boxToSircle.value = withTiming(0, {duration: 3000});
      textAni.value = withDelay(2000, withSpring(0));
    } else {
      boxToSircle.value = withTiming(1, {duration: 3000});
      textAni.value = withDelay(500, withSpring(1));
    }
  }, 3000);
  const textAnimation = useAnimatedStyle(() => {
    const fontSize = interpolate(textAni.value, [0, 1], [25, 30]);
    const color = interpolateColor(
      textAni.value,
      [0, 0.5, 1],
      ['black', 'green', 'pink'],
    );
    const transform = interpolate(textAni.value, [0, 1], [0, 70]);
    const opacity = interpolate(textAni.value, [0, 0.5, 1], [0, 0.5, 1]);
    return {
      fontSize: fontSize,
      color: color,
      transform: [{translateX: transform}],
      opacity: opacity,
    };
  });
  return (
    <View style={styles.cotainer}>
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>

      <Animated.Text style={[{fontSize: 40}, textAnimation]}>
        My Name is Vineet
      </Animated.Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
