import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Body = ({children, style = {}}) => {
  return <Text style={[styles.body, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
  },
});
