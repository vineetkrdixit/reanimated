import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export const AnimateMovement = () => {
  const translatex = useSharedValue(0);
  const slideAnimation = () => {
    translatex.value = withSpring(translatex.value + 50);
  };
  return (
    <View style={styles.cotainer}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: translatex}]}]}
      />
      <Button onPress={slideAnimation} title="Click me" />
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
