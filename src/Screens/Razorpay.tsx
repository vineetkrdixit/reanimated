import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export const Razorpay = () => {
  return (
    <View style={styles.cotainer}>
      <TouchableHighlight
        style={styles.btn}
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_TdwnVfZG2D4zhn',
            amount: '5000', //means 50 rs
            name: 'Organization Name',
            // order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#53a20e'},
          };
          RazorpayCheckout.open(options)
            .then((data: {razorpay_payment_id: string}) => {
              // handle success
              console.log(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error: any) => {
              // handle failure
              throw new Error(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text style={styles.textStyle}>open razorpay</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '700',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
