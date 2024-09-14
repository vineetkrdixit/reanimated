import { ZegoVideoCallNavigationProp } from '@src/Types/NavigationTypes';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import {
	ZegoUIKitPrebuiltCall,
	ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

type ZegoVideoCallProps = {
	navigation: ZegoVideoCallNavigationProp;
};
type ZegoCallEndType = {
	callID: string;
	reason: string;
	duration: string;
};

export const ZegoVideoCall: FC<ZegoVideoCallProps> = ({ navigation }) => {
	const yourAppID = 575951079;
	const yourAppSign = 'c42786d25ece820dd7cf17c46f8a4e210791586fd4d9dff81ea5f83b46f10135';
	return (
		<View style={styles.container}>
			<ZegoUIKitPrebuiltCall
				appID={yourAppID}
				appSign={yourAppSign}
				userID={'994732982'} // userID can be something like a phone number or the user id on your own user system.
				userName={'vineet'}
				callID={'123'} // callID can be any unique string.
				config={{
					// You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
					...ONE_ON_ONE_VIDEO_CALL_CONFIG,
					onCallEnd: ({ callID, reason, duration }: ZegoCallEndType) => {
						console.table(callID);
						console.table(reason);
						console.table(duration);
						navigation.navigate('ZegoVideoCallScreen');
					},
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 0,
	},
});
