import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H1 = ({children, style = {}}) => {
  return <Text style={[styles.h1, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
});
