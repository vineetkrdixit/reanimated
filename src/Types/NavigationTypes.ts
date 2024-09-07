import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	HomeScreen: undefined;
	AnimateProgress: undefined;
	AnimateMovement: undefined;
	AnimateWithStyledComponent: undefined;
	TransformAnimation: undefined;
	Razorpay: undefined;
	// other screens can be added here
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type RazorpayNavigationProp = StackNavigationProp<RootStackParamList, 'Razorpay'>;
export type AnimateWithStyledComponentNavigationProp = StackNavigationProp<
	RootStackParamList,
	'AnimateWithStyledComponent'
>;
export type AnimateProgressNavigationProp = StackNavigationProp<
	RootStackParamList,
	'AnimateProgress'
>;
export type AnimateMovementNavigationProp = StackNavigationProp<
	RootStackParamList,
	'AnimateMovement'
>;
export type TransformAnimationtNavigationProp = StackNavigationProp<
	RootStackParamList,
	'TransformAnimation'
>;
