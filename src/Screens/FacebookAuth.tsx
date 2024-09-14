import { FacebookAuthNavigationProp } from '@src/Types/NavigationTypes';
import { FC } from 'react';
import { View } from 'react-native';
import { AccessToken, LoginButton, LoginResult } from 'react-native-fbsdk-next';
// import { StyleSheet } from "react-native"

type FacebookAuthProps = {
	navigation: FacebookAuthNavigationProp;
};

export const FacebookAuth: FC<FacebookAuthProps> = () => {
	return (
		<View>
			<LoginButton
				onLoginFinished={(error: Record<string, unknown>, result: LoginResult) => {
					if (error) {
						console.error('login has error: ' + result);
					} else if (result.isCancelled) {
						console.error('login is cancelled.');
					} else {
						AccessToken.getCurrentAccessToken().then((data) => {
							data?.accessToken.toString();
						});
					}
				}}
				onLogoutFinished={() => console.error('logout.')}
			/>
		</View>
	);
};
