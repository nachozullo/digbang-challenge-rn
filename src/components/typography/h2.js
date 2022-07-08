import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H2 = ({children, style = {}}) => {
  return <Text style={[styles.h2, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
});
