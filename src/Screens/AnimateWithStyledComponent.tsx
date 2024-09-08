import { AnimateWithStyledComponentNavigationProp } from '@src/Types/NavigationTypes';
import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
type AnimateWithStyledComponentProps = {
	navigation: AnimateWithStyledComponentNavigationProp;
};

export const AnimateWithStyledComponent: FC<AnimateWithStyledComponentProps> = () => {
	const translateX = useSharedValue(0);
	const slideAnimatedStyle = () => {
		translateX.value = translateX.value + 50;
	};
	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: withSpring(translateX.value * 2) }],
	}));

	return (
		<View style={styles.cotainer}>
			<Animated.View
				// style={[styles.box, {transform: [{translateX: translatex}]}]}
				style={[styles.box, animatedStyles]}
			/>
			<Button onPress={slideAnimatedStyle} title='Click me' />
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
