/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';
// import {StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {
	ZegoVideoCall,
	ZegoVideoCallScreen,
	AnimateMovement,
	AnimateProgress,
	AnimateWithStyledComponent,
	HomeScreen,
	Razorpay,
	TransformAnimation,
	FacebookAuth,
} from '@src/Screens';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='HomeScreen' component={HomeScreen} />
				<Stack.Screen name='AnimateProgress' component={AnimateProgress} />
				<Stack.Screen name='AnimateMovement' component={AnimateMovement} />
				<Stack.Screen
					name='AnimateWithStyledComponent'
					component={AnimateWithStyledComponent}
				/>
				<Stack.Screen name='TransformAnimation' component={TransformAnimation} />
				<Stack.Screen name='Razorpay' component={Razorpay} />
				<Stack.Screen name='ZegoVideoCall' component={ZegoVideoCall} />
				<Stack.Screen name='ZegoVideoCallScreen' component={ZegoVideoCallScreen} />
				<Stack.Screen name='FacebookAuth' component={FacebookAuth} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({});

export default App;
