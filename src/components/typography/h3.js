import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H3 = ({children, style = {}}) => {
  return <Text style={[styles.h3, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
});
