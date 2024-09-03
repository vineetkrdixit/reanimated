import {HomeScreenData} from '@src/Constants';
import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

export const HomeScreen = ({navigation}) => {
  const renderHomeData = ({item, index}) => {
    const {routeName, title} = item;
    console.log(routeName, '-=-=');
    return (
      <TouchableOpacity
        style={styles.card}
        key={index.toString() + 1}
        onPress={() => navigation.navigate(routeName)}>
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
