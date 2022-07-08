import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H4 = ({children, style = {}}) => {
  return <Text style={[styles.h4, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h4: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
});
