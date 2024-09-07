import { AnimateProgressNavigationProp } from '@src/Types/NavigationTypes';
import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, {
	Easing,
	ReduceMotion,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

type AnimateProgressProps = {
	navigation: AnimateProgressNavigationProp;
};
export const AnimateProgress: FC<AnimateProgressProps> = () => {
	const widther = useSharedValue(100);
	const handlePress = () => {
		widther.value = withTiming(widther.value + 50, {
			duration: 2000,
			easing: Easing.back(),
			reduceMotion: ReduceMotion.System,
		});
	};
	return (
		<View style={styles.cotainer}>
			<Animated.View
				style={[
					{
						width: widther,
					},
					styles.box,
				]}
			/>
			<Button onPress={handlePress} title='Click me' />
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
		height: 100,
		backgroundColor: 'violet',
	},
});
