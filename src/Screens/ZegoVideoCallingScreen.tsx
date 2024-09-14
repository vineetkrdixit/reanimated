import { ZegoVideoCallScreenNavigationProp } from '@src/Types/NavigationTypes';
import React, { FC } from 'react';
import { View, StyleSheet, Button } from 'react-native';

type ZegoVideoCallScreenProps = {
	navigation: ZegoVideoCallScreenNavigationProp;
};

export const ZegoVideoCallScreen: FC<ZegoVideoCallScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Button
				title='Make a call'
				color={'red'}
				onPress={() => navigation.navigate('ZegoVideoCall')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
