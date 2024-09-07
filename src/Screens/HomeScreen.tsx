import { HomeScreenData } from '@src/Constants';
import { HomeScreenNavigationProp } from '@src/Types/NavigationTypes';
import React, { FC } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

type Items = {
	id: number;
	title: string;
	description: string;
	routeName: string;
};
type HomeData = {
	item: Items;
	index: number;
};
type HomeScreenProps = {
	navigation: HomeScreenNavigationProp;
};

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	const renderHomeData = ({ item, index }: HomeData) => {
		const { routeName, title } = item;

		return (
			<TouchableOpacity
				style={styles.card}
				key={index.toString() + 1}
				onPress={() => navigation.navigate(routeName)}
			>
				<Text>{title}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.cotainer}>
			{<FlatList data={HomeScreenData} renderItem={renderHomeData} />}
		</View>
	);
};

const styles = StyleSheet.create({
	cotainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		borderWidth: 1,
		borderColor: '#ffffy6',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
