import { Items } from '@src/Screens';

export const HomeScreenData: Items[] = [
	{
		id: 0,
		title: 'Animation Progress',
		description: 'Single Animation with useSharedValue',
		routeName: 'AnimateProgress',
	},
	{
		id: 1,
		title: 'Animation Movement',
		description: 'Animation with useShared value to transform without useAnimatedStyle',
		routeName: 'AnimateMovement',
	},
	{
		id: 2,
		title: 'Animation Movement with useAnimatedStyle and transform',
		description: 'Animation Movement with useAnimatedStyle and transform',
		routeName: 'AnimateWithStyledComponent',
	},
	{
		id: 3,
		title: 'Animate with shape change with interpolate',
		description: 'Animation with Change in shape of object with interpolate',
		routeName: 'TransformAnimation',
	},
	{
		id: 4,
		title: 'Animate Text',
		description: 'Animate text using useShared value useAnimatedStyle and interpolate',
		routeName: 'TransformAnimation',
	},
	{
		id: 5,
		title: 'RazorPay',
		description: 'Razourpay',
		routeName: 'Razorpay',
	},
];
